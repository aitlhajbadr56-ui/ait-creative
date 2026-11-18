const SHEET_ID = '1deY-WQZodPK4bGFzYd59xzH3XqVR91XSlzPJAuFRtzs';

const PRODUCT_HEADERS = [
  'product_id', 'product_name_fr', 'product_name_en', 'price_mad',
  'description', 'reference', 'images', 'stock', 'active', 'colors', 'sizes'
];
const ORDER_HEADERS = [
  'order_id', 'order_date', 'customer_name', 'phone', 'email', 'city',
  'full_address', 'delivery_instructions', 'customer_language', 'product_id',
  'product_name', 'reference', 'color', 'size', 'quantity', 'unit_price_mad',
  'delivery_fee_mad', 'total_mad', 'payment_method', 'order_status', 'admin_notes'
];
const SETTINGS_HEADERS = ['setting', 'value'];

function doGet(e) {
  try {
    setupStore();
    const action = String((e && e.parameter && e.parameter.action) || 'products').toLowerCase();
    if (action === 'products' || action === 'catalog') return jsonOutput(getStoreData());
    if (action === 'health') return jsonOutput({ ok: true, service: 'AIT CREATIVE API' });
    return jsonOutput({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return jsonOutput({ ok: false, error: safeError(err) });
  }
}

function doPost(e) {
  try {
    setupStore();
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    const payload = JSON.parse(raw);
    const action = String(payload.action || 'createOrder').toLowerCase();
    if (action === 'createorder' || action === 'order') return jsonOutput(createOrder(payload));
    return jsonOutput({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return jsonOutput({ ok: false, error: safeError(err) });
  }
}

function jsonOutput(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function safeError(err) {
  return err && err.message ? String(err.message) : 'Unexpected server error';
}

function getSpreadsheet() {
  return SpreadsheetApp.openById(SHEET_ID);
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  ensureHeaders(sheet, headers);
  return sheet;
}

function ensureHeaders(sheet, requiredHeaders) {
  const lastCol = Math.max(sheet.getLastColumn(), 1);
  const current = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(v => String(v || '').trim())
    : [];
  if (current.filter(Boolean).length === 0) {
    sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
    sheet.setFrozenRows(1);
    return;
  }
  const missing = requiredHeaders.filter(h => current.indexOf(h) === -1);
  if (missing.length) {
    sheet.getRange(1, lastCol + 1, 1, missing.length).setValues([missing]);
  }
  sheet.setFrozenRows(1);
}

function setupStore() {
  const ss = getSpreadsheet();
  getOrCreateSheet(ss, 'PRODUCTS', PRODUCT_HEADERS);
  getOrCreateSheet(ss, 'ORDERS', ORDER_HEADERS);
  getOrCreateSheet(ss, 'SETTINGS', SETTINGS_HEADERS);
  return 'Store sheets are ready';
}

function getHeaderMap(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const map = {};
  headers.forEach((h, i) => { map[String(h).trim()] = i; });
  return map;
}

function cell(row, map, key) {
  return map[key] === undefined ? '' : row[map[key]];
}

function parseOptions(value, fallback) {
  const text = String(value == null ? '' : value).trim();
  if (!text) return fallback.slice();
  return text.split(/[,،;\n]/).map(x => x.trim()).filter(Boolean);
}

function isActive(value) {
  const v = String(value == null ? '' : value).trim().toLowerCase();
  return !(v === 'false' || v === '0' || v === 'no' || v === 'non' || v === 'inactive');
}

function getSettingsMap() {
  const sheet = getSpreadsheet().getSheetByName('SETTINGS');
  const values = sheet.getDataRange().getValues();
  const result = {};
  for (let i = 1; i < values.length; i++) {
    const key = String(values[i][0] || '').trim();
    if (key) result[key] = values[i][1];
  }
  return result;
}

function getStoreData() {
  const sheet = getSpreadsheet().getSheetByName('PRODUCTS');
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return { ok: true, products: [], settings: publicSettings(getSettingsMap()) };
  }
  const map = getHeaderMap(sheet);
  const products = [];
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const id = String(cell(row, map, 'product_id') || '').trim();
    if (!id || !isActive(cell(row, map, 'active'))) continue;
    const price = Number(cell(row, map, 'price_mad'));
    products.push({
      product_id: id,
      product_name_fr: String(cell(row, map, 'product_name_fr') || ''),
      product_name_en: String(cell(row, map, 'product_name_en') || ''),
      price_mad: Number.isFinite(price) ? price : 0,
      description: String(cell(row, map, 'description') || ''),
      reference: String(cell(row, map, 'reference') || ''),
      images: String(cell(row, map, 'images') || ''),
      stock: cell(row, map, 'stock') === '' ? '' : Number(cell(row, map, 'stock')),
      colors: parseOptions(cell(row, map, 'colors'), ['Noir', 'Beige']),
      sizes: parseOptions(cell(row, map, 'sizes'), ['S', 'M', 'L', 'XL', 'XXL'])
    });
  }
  return { ok: true, products: products, settings: publicSettings(getSettingsMap()) };
}

function publicSettings(settings) {
  const fee = Number(settings.delivery_fee_mad);
  return {
    store_name: String(settings.store_name || 'AIT CREATIVE'),
    delivery_fee_mad: Number.isFinite(fee) && fee >= 0 ? fee : 0,
    instagram_url: String(settings.instagram_url || ''),
    logo_url: String(settings.logo_url || '')
  };
}

function normalizeMoroccanPhone(value) {
  let phone = String(value || '').replace(/[\s().-]/g, '');
  if (phone.indexOf('+212') === 0) phone = '0' + phone.slice(4);
  else if (phone.indexOf('212') === 0) phone = '0' + phone.slice(3);
  if (!/^0[5-7]\d{8}$/.test(phone)) throw new Error('Please enter a valid Moroccan phone number.');
  return phone;
}

function createOrder(payload) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const customer = payload.customer || {};
    const name = String(customer.name || '').trim();
    const phone = normalizeMoroccanPhone(customer.phone);
    const city = String(customer.city || '').trim();
    const address = String(customer.address || '').trim();
    const email = String(customer.email || '').trim();
    const instructions = String(customer.instructions || '').trim();
    const language = String(payload.language || 'fr').trim();
    const items = Array.isArray(payload.items) ? payload.items : [];

    if (!name || !city || !address) throw new Error('Please complete your name, city and full address.');
    if (!items.length || items.length > 20) throw new Error('Your cart is empty or contains too many items.');

    const productsSheet = getSpreadsheet().getSheetByName('PRODUCTS');
    const productValues = productsSheet.getDataRange().getValues();
    const productMap = getHeaderMap(productsSheet);
    const byId = {};
    for (let i = 1; i < productValues.length; i++) {
      const row = productValues[i];
      const id = String(cell(row, productMap, 'product_id') || '').trim();
      if (id) byId[id] = { rowNumber: i + 1, row: row };
    }

    const prepared = [];
    const stockChanges = {};
    let subtotal = 0;
    items.forEach(item => {
      const id = String(item.product_id || '').trim();
      const entry = byId[id];
      if (!entry) throw new Error('A product in your cart is no longer available.');
      const row = entry.row;
      if (!isActive(cell(row, productMap, 'active'))) throw new Error('A product in your cart is inactive.');
      const productName = String(cell(row, productMap, language === 'en' ? 'product_name_en' : 'product_name_fr') || cell(row, productMap, 'product_name_fr') || id);
      const price = Number(cell(row, productMap, 'price_mad'));
      if (!Number.isFinite(price) || price < 0) throw new Error('Invalid product price for ' + productName);
      const qty = Math.floor(Number(item.quantity));
      if (!Number.isFinite(qty) || qty < 1 || qty > 10) throw new Error('Quantity must be between 1 and 10.');
      const colors = parseOptions(cell(row, productMap, 'colors'), ['Noir', 'Beige']);
      const sizes = parseOptions(cell(row, productMap, 'sizes'), ['S', 'M', 'L', 'XL', 'XXL']);
      const color = String(item.color || '').trim();
      const size = String(item.size || '').trim();
      if (colors.indexOf(color) === -1) throw new Error('Please choose an available color for ' + productName + '.');
      if (sizes.indexOf(size) === -1) throw new Error('Please choose an available size for ' + productName + '.');

      const rawStock = cell(row, productMap, 'stock');
      if (rawStock !== '' && rawStock !== null) {
        const currentStock = Number(rawStock);
        const already = stockChanges[id] || 0;
        if (!Number.isFinite(currentStock) || currentStock - already < qty) {
          throw new Error('Not enough stock for ' + productName + '.');
        }
        stockChanges[id] = already + qty;
      }
      subtotal += price * qty;
      prepared.push({
        id: id, rowNumber: entry.rowNumber, name: productName,
        reference: String(cell(row, productMap, 'reference') || ''),
        color: color, size: size, quantity: qty, price: price
      });
    });

    const settings = publicSettings(getSettingsMap());
    const deliveryFee = settings.delivery_fee_mad;
    const total = subtotal + deliveryFee;
    const now = new Date();
    const orderId = 'AIT-' + Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss') + '-' + Math.floor(100 + Math.random() * 900);
    const ordersSheet = getSpreadsheet().getSheetByName('ORDERS');
    const orderMap = getHeaderMap(ordersSheet);
    const outputRows = prepared.map(p => {
      const row = new Array(ordersSheet.getLastColumn()).fill('');
      const values = {
        order_id: orderId, order_date: now, customer_name: name, phone: phone,
        email: email, city: city, full_address: address,
        delivery_instructions: instructions, customer_language: language,
        product_id: p.id, product_name: p.name, reference: p.reference,
        color: p.color, size: p.size, quantity: p.quantity,
        unit_price_mad: p.price, delivery_fee_mad: deliveryFee,
        total_mad: total, payment_method: 'COD', order_status: 'New', admin_notes: ''
      };
      Object.keys(values).forEach(key => { if (orderMap[key] !== undefined) row[orderMap[key]] = values[key]; });
      return row;
    });

    const startRow = ordersSheet.getLastRow() + 1;
    ordersSheet.getRange(startRow, 1, outputRows.length, ordersSheet.getLastColumn()).setValues(outputRows);

    Object.keys(stockChanges).forEach(id => {
      const entry = byId[id];
      const currentStock = Number(cell(entry.row, productMap, 'stock'));
      productsSheet.getRange(entry.rowNumber, productMap.stock + 1).setValue(currentStock - stockChanges[id]);
    });

    return {
      ok: true,
      order_id: orderId,
      total_mad: total,
      message: 'Your order has been received. We will contact you to confirm it.'
    };
  } finally {
    lock.releaseLock();
  }
}
