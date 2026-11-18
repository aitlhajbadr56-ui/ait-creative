const HTML = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#080808">
  <meta name="description" content="AIT CREATIVE — Independent creative archive from Morocco. Original Art. Wearable Artifacts.">
  <title>AIT CREATIVE — Wearable Artifacts</title>
  <style>
    :root{--black:#080808;--panel:#151515;--beige:#D8C2A3;--ivory:#E8DCC8;--muted:#a99d8e;--line:rgba(216,194,163,.22)}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--black);color:var(--ivory);font-family:Arial,Helvetica,sans-serif}button,input,select,textarea{font:inherit}button{cursor:pointer}.wrap{width:min(1180px,92%);margin:auto}.topline{border-bottom:1px solid var(--line);font-size:10px;letter-spacing:2px;text-align:center;padding:10px;color:var(--muted)}
    header{position:sticky;top:0;z-index:10;background:rgba(8,8,8,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}.nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:18px}.brand{font-size:21px;letter-spacing:4px;font-weight:800;color:var(--ivory);text-decoration:none}.brand span{color:var(--beige)}.navlinks{display:flex;gap:24px;align-items:center}.navlinks a,.navlinks button{color:var(--muted);text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;background:none;border:0}.navlinks a:hover,.navlinks button:hover{color:var(--beige)}.cartbtn{border:1px solid var(--beige)!important;padding:11px 15px;color:var(--beige)!important}.hero{min-height:560px;display:flex;align-items:center;border-bottom:1px solid var(--line);background:radial-gradient(ellipse at 80% 45%,rgba(216,194,163,.12),transparent 42%)}.hero-inner{padding:90px 0;max-width:720px}.eyebrow{font-size:10px;letter-spacing:4px;color:var(--beige);text-transform:uppercase}.hero h1{font-family:Georgia,serif;font-size:clamp(48px,8vw,90px);font-weight:400;line-height:.98;letter-spacing:-3px;margin:24px 0}.hero h1 em{color:var(--beige);font-weight:400}.hero p{color:var(--muted);line-height:1.8;max-width:490px;font-size:14px}.btn{display:inline-flex;align-items:center;justify-content:center;padding:15px 22px;border:1px solid var(--beige);background:var(--beige);color:var(--black);text-decoration:none;text-transform:uppercase;letter-spacing:1.8px;font-size:10px;font-weight:bold;margin-top:22px}.btn.ghost{background:transparent;color:var(--beige)}.section{padding:82px 0;border-bottom:1px solid var(--line)}.section-head{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:34px}.section h2{font:400 clamp(32px,5vw,48px) Georgia,serif;margin:10px 0 0}.sub{color:var(--muted);font-size:12px;line-height:1.7}.products{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.product{cursor:pointer}.product-image{height:360px;background:#171513;overflow:hidden;position:relative;border:1px solid rgba(216,194,163,.12)}.product-image img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}.product:hover .product-image img{transform:scale(1.04)}.placeholder{height:100%;display:grid;place-items:center;color:#71685d;font:italic 28px Georgia,serif;letter-spacing:2px}.product-meta{display:flex;justify-content:space-between;gap:10px;padding:15px 2px}.product-name{font:20px Georgia,serif}.price{color:var(--beige);font-size:13px;white-space:nowrap}.small-ref{font-size:9px;color:var(--muted);letter-spacing:2px;margin-top:7px}.about-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:70px;align-items:center}.about-mark{border:1px solid var(--line);min-height:280px;display:grid;place-items:center;color:var(--beige);font:italic 42px Georgia,serif;background:linear-gradient(135deg,#171513,#090909)}footer{padding:32px 0;color:var(--muted);font-size:10px;letter-spacing:1.5px}.footer-row{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}.footer-row a{color:var(--beige);text-decoration:none}
    .overlay{position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:30;display:none;overflow:auto;padding:24px}.overlay.open{display:block}.modal{width:min(900px,100%);margin:5vh auto;background:#111;border:1px solid var(--line);padding:28px;position:relative}.close{position:absolute;right:18px;top:15px;background:none;color:var(--beige);border:0;font-size:25px}.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px}.detail-image{height:450px;background:#191714}.detail-image img{width:100%;height:100%;object-fit:cover}.detail h2{font:38px Georgia,serif;margin:8px 0}.detail-price{color:var(--beige);font-size:18px;margin:18px 0}.detail-desc{color:var(--muted);font-size:13px;line-height:1.8;white-space:pre-line}.field{margin:16px 0}.field label{display:block;color:var(--muted);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}.field input,.field textarea,.field select{width:100%;background:#080808;border:1px solid var(--line);padding:13px;color:var(--ivory);outline:none}.field textarea{min-height:82px;resize:vertical}.choices{display:flex;gap:8px;flex-wrap:wrap}.choice{background:transparent;border:1px solid var(--line);color:var(--ivory);padding:9px 13px;font-size:11px}.choice.selected{border-color:var(--beige);background:rgba(216,194,163,.13);color:var(--beige)}.qty{display:flex;align-items:center;gap:12px}.qty button{background:#222;border:1px solid var(--line);color:var(--beige);width:32px;height:32px}.cart-line{display:grid;grid-template-columns:72px 1fr auto;gap:15px;padding:15px 0;border-bottom:1px solid var(--line);align-items:center}.cart-thumb{height:82px;background:#1a1815}.cart-thumb img{width:100%;height:100%;object-fit:cover}.cart-line h4{font:17px Georgia,serif;margin:0 0 6px}.cart-line small{color:var(--muted)}.totals{margin:22px 0;border-top:1px solid var(--line);padding-top:16px}.total-row{display:flex;justify-content:space-between;margin:10px 0;font-size:13px}.total-row.final{font-size:18px;color:var(--beige)}.notice{padding:13px;border:1px solid var(--line);color:var(--muted);font-size:12px;line-height:1.6;margin:14px 0}.toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--beige);color:#080808;padding:13px 18px;z-index:60;font-size:12px;display:none;max-width:90%;text-align:center}.toast.show{display:block}.empty{padding:50px 10px;text-align:center;color:var(--muted)}.loading{color:var(--muted);padding:35px 0}.error{color:#e6a69a}
    @media(max-width:760px){.nav{height:66px}.navlinks{gap:12px}.navlinks a{display:none}.brand{font-size:17px}.hero{min-height:490px}.hero-inner{padding:70px 0}.products{grid-template-columns:repeat(2,1fr);gap:12px}.product-image{height:250px}.product-name{font-size:17px}.about-grid,.detail-grid{grid-template-columns:1fr;gap:22px}.detail-image{height:330px}.modal{padding:22px 16px;margin:2vh auto}.section{padding:60px 0}}
    @media(max-width:430px){.products{grid-template-columns:1fr 1fr}.product-image{height:205px}.navlinks button{font-size:10px}.cartbtn{padding:9px 10px}.hero h1{letter-spacing:-2px}}
  </style>
</head>
<body>
  <div class="topline">INDEPENDENT CREATIVE ARCHIVE FROM MOROCCO · ORIGINAL ART · WEARABLE ARTIFACTS</div>
  <header><div class="wrap nav"><a class="brand" href="#home">AIT<span>.</span>CREATIVE</a><nav class="navlinks"><a href="#home">Accueil</a><a href="#collection">Collection</a><a href="#about">À propos</a><a href="#contact">Contact</a><button class="cartbtn" id="openCart">PANIER (<span id="cartCount">0</span>)</button></nav></div></header>
  <main>
    <section class="hero" id="home"><div class="wrap hero-inner"><div class="eyebrow">Morocco · Independent label</div><h1>Wearable<br><em>Artifacts.</em></h1><p>Une archive créative indépendante née au Maroc. Des pièces pensées comme des objets d’expression, entre art original, identité et vêtement.</p><a class="btn" href="#collection">Découvrir la collection</a></div></section>
    <section class="section" id="collection"><div class="wrap"><div class="section-head"><div><div class="eyebrow">The archive</div><h2>Collection</h2></div><div class="sub">Pièces sélectionnées.<br>Quantités limitées.</div></div><div id="products" class="products"><div class="loading">Chargement de la collection…</div></div></div></section>
    <section class="section" id="about"><div class="wrap about-grid"><div><div class="eyebrow">Our point of view</div><h2>Original art.<br><em style="color:var(--beige)">Wearable artifacts.</em></h2><p class="sub">AIT CREATIVE est un archive créatif indépendant du Maroc. Chaque pièce est conçue pour porter une idée, une image et une identité. Pas simplement un vêtement : un artefact à porter.</p></div><div class="about-mark">AIT CREATIVE</div></div></section>
    <section class="section" id="contact"><div class="wrap"><div class="eyebrow">Stay connected</div><h2>Contact</h2><p class="sub">Pour toute question concernant une pièce ou une commande, contactez-nous sur Instagram.</p><a class="btn ghost" id="instagramLink" href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a></div></section>
  </main>
  <footer><div class="wrap footer-row"><span>© <span id="year"></span> AIT CREATIVE · MOROCCO</span><span>ORIGINAL ART. WEARABLE ARTIFACTS.</span></div></footer>

  <div class="overlay" id="detailOverlay"><div class="modal"><button class="close" data-close="detailOverlay">×</button><div id="detailContent"></div></div></div>
  <div class="overlay" id="cartOverlay"><div class="modal"><button class="close" data-close="cartOverlay">×</button><div class="eyebrow">Your selection</div><h2 style="font:38px Georgia,serif">Votre panier</h2><div id="cartItems"></div><div id="cartTotals"></div><button class="btn" id="checkoutBtn">Passer la commande</button></div></div>
  <div class="overlay" id="checkoutOverlay"><div class="modal"><button class="close" data-close="checkoutOverlay">×</button><div class="eyebrow">Final step</div><h2 style="font:38px Georgia,serif">Informations de livraison</h2><div class="notice">Paiement à la livraison (Cash on Delivery). Nous vous contacterons pour confirmer votre commande.</div><form id="checkoutForm"><div class="field"><label>Nom complet *</label><input name="name" required autocomplete="name"></div><div class="field"><label>Téléphone marocain *</label><input name="phone" required placeholder="06XXXXXXXX" inputmode="tel" autocomplete="tel"></div><div class="field"><label>Ville *</label><input name="city" required autocomplete="address-level2"></div><div class="field"><label>Adresse complète *</label><textarea name="address" required autocomplete="street-address"></textarea></div><div class="field"><label>Email (optionnel)</label><input name="email" type="email" autocomplete="email"></div><div class="field"><label>Instructions de livraison (optionnel)</label><textarea name="instructions"></textarea></div><button class="btn" id="submitOrder" type="submit">Confirmer la commande · COD</button></form></div></div>
  <div class="overlay" id="successOverlay"><div class="modal" style="max-width:560px;text-align:center"><div class="eyebrow">Order received</div><h2 style="font:40px Georgia,serif">Merci.</h2><p class="sub" id="successMessage">Votre commande a bien été reçue.</p><div class="notice" id="successNumber"></div><button class="btn" data-close="successOverlay">Continuer</button></div></div>
  <div class="toast" id="toast"></div>

<script>
(function(){
  'use strict';
  var products = [];
  var settings = {delivery_fee_mad:0, instagram_url:'https://www.instagram.com/'};
  var cart = [];
  var selectedProduct = null;
  var selectedColor = '';
  var selectedSize = '';
  var selectedQty = 1;
  var money = function(n){ return new Intl.NumberFormat('fr-MA',{maximumFractionDigits:0}).format(Number(n)||0) + ' MAD'; };
  var byId = function(id){ return document.getElementById(id); };
  var escapeHtml = function(s){ return String(s == null ? '' : s).replace(/[&<>\"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c];}); };
  var imageUrls = function(value){ return String(value||'').split(/[,،;\n]/).map(function(x){return x.trim();}).filter(Boolean).map(function(url){
    var m = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i) || url.match(/[?&]id=([^&]+)/i);
    if(m) return 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w1200';
    return url;
  }); };
  var imageMarkup = function(value, cls){ var urls=imageUrls(value); return urls.length ? '<img class="'+(cls||'')+'" src="'+escapeHtml(urls[0])+'" alt="AIT CREATIVE product" onerror="this.style.display=\'none\'">' : '<div class="placeholder">AIT.</div>'; };
  var toast = function(message){ var el=byId('toast');el.textContent=message;el.classList.add('show');setTimeout(function(){el.classList.remove('show');},3000); };
  var show = function(id){byId(id).classList.add('open');};
  var hide = function(id){byId(id).classList.remove('open');};
  var getProduct = function(id){return products.find(function(p){return p.product_id===id;});};
  var renderProducts = function(){
    var root=byId('products');
    if(!products.length){root.innerHTML='<div class="empty" style="grid-column:1/-1">La collection sera bientôt disponible.</div>';return;}
    root.innerHTML=products.map(function(p){
      var n=p.product_name_fr||p.product_name_en||'AIT CREATIVE';
      var im=imageMarkup(p.images,'');
      return '<article class="product" data-product="'+escapeHtml(p.product_id)+'"><div class="product-image">'+im+'</div><div class="product-meta"><div><div class="product-name">'+escapeHtml(n)+'</div><div class="small-ref">'+escapeHtml(p.reference||'AIT CREATIVE')+'</div></div><div class="price">'+money(p.price_mad)+'</div></div></article>';
    }).join('');
    Array.prototype.forEach.call(root.querySelectorAll('.product'),function(el){el.addEventListener('click',function(){openProduct(el.getAttribute('data-product'));});});
  };
  var openProduct = function(id){
    var p=getProduct(id);if(!p)return;selectedProduct=p;selectedColor=(p.colors&&p.colors[0])||'Noir';selectedSize=(p.sizes&&p.sizes[0])||'M';selectedQty=1;
    byId('detailContent').innerHTML='<div class="detail-grid"><div class="detail-image">'+imageMarkup(p.images,'')+'</div><div class="detail"><div class="eyebrow">'+escapeHtml(p.reference||'AIT CREATIVE')+'</div><h2>'+escapeHtml(p.product_name_fr||p.product_name_en||'')+'</h2><div class="detail-price">'+money(p.price_mad)+'</div><p class="detail-desc">'+escapeHtml(p.description||'Original art. Wearable artifacts.')+'</p><div class="field"><label>Couleur</label><div class="choices" id="colorChoices">'+(p.colors||['Noir','Beige']).map(function(c){return '<button type="button" class="choice '+(c===selectedColor?'selected':'')+'" data-color="'+escapeHtml(c)+'">'+escapeHtml(c)+'</button>';}).join('')+'</div></div><div class="field"><label>Taille</label><div class="choices" id="sizeChoices">'+(p.sizes||['S','M','L','XL','XXL']).map(function(s){return '<button type="button" class="choice '+(s===selectedSize?'selected':'')+'" data-size="'+escapeHtml(s)+'">'+escapeHtml(s)+'</button>';}).join('')+'</div></div><div class="field"><label>Quantité</label><div class="qty"><button type="button" id="qtyMinus">−</button><span id="detailQty">1</span><button type="button" id="qtyPlus">+</button></div></div><button class="btn" id="addToCart">Ajouter au panier</button></div></div>';
    Array.prototype.forEach.call(byId('colorChoices').querySelectorAll('[data-color]'),function(b){b.addEventListener('click',function(){selectedColor=b.getAttribute('data-color');Array.prototype.forEach.call(byId('colorChoices').children,function(x){x.classList.toggle('selected',x===b);});});});
    Array.prototype.forEach.call(byId('sizeChoices').querySelectorAll('[data-size]'),function(b){b.addEventListener('click',function(){selectedSize=b.getAttribute('data-size');Array.prototype.forEach.call(byId('sizeChoices').children,function(x){x.classList.toggle('selected',x===b);});});});
    byId('qtyMinus').onclick=function(){selectedQty=Math.max(1,selectedQty-1);byId('detailQty').textContent=selectedQty;};
    byId('qtyPlus').onclick=function(){selectedQty=Math.min(10,selectedQty+1);byId('detailQty').textContent=selectedQty;};
    byId('addToCart').onclick=function(){addCart(p,selectedColor,selectedSize,selectedQty);hide('detailOverlay');};
    show('detailOverlay');
  };
  var addCart = function(p,color,size,qty){
    var found=cart.find(function(x){return x.product_id===p.product_id&&x.color===color&&x.size===size;});
    if(found)found.quantity=Math.min(10,found.quantity+qty);else cart.push({product_id:p.product_id,color:color,size:size,quantity:qty});
    renderCartCount();toast('Produit ajouté au panier.');
  };
  var renderCartCount=function(){byId('cartCount').textContent=cart.reduce(function(s,x){return s+x.quantity;},0);};
  var subtotal=function(){return cart.reduce(function(sum,x){var p=getProduct(x.product_id);return sum+(p?Number(p.price_mad)*x.quantity:0);},0);};
  var renderCart=function(){
    var root=byId('cartItems');
    if(!cart.length){root.innerHTML='<div class="empty">Votre panier est vide.</div>';byId('cartTotals').innerHTML='';byId('checkoutBtn').style.display='none';return;}
    byId('checkoutBtn').style.display='inline-flex';
    root.innerHTML=cart.map(function(x,i){var p=getProduct(x.product_id)||{};return '<div class="cart-line"><div class="cart-thumb">'+imageMarkup(p.images,'')+'</div><div><h4>'+escapeHtml(p.product_name_fr||p.product_name_en||'Produit')+'</h4><small>'+escapeHtml(x.color)+' · '+escapeHtml(x.size)+' · Qté '+x.quantity+'</small><div class="price" style="margin-top:7px">'+money((p.price_mad||0)*x.quantity)+'</div></div><button class="choice" data-remove="'+i+'">Retirer</button></div>';}).join('');
    Array.prototype.forEach.call(root.querySelectorAll('[data-remove]'),function(b){b.onclick=function(){cart.splice(Number(b.getAttribute('data-remove')),1);renderCart();renderCartCount();};});
    byId('cartTotals').innerHTML='<div class="totals"><div class="total-row"><span>Sous-total</span><span>'+money(subtotal())+'</span></div><div class="total-row"><span>Livraison</span><span>'+money(settings.delivery_fee_mad)+'</span></div><div class="total-row final"><strong>Total</strong><strong>'+money(subtotal()+Number(settings.delivery_fee_mad||0))+'</strong></div></div>';
  };
  var loadProducts=async function(){
    try{
      var response=await fetch('/api/products',{headers:{'Accept':'application/json'},cache:'no-store'});
      var data=await response.json();
      if(!response.ok||!data.ok)throw new Error(data.error||'Impossible de charger les produits.');
      products=data.products||[];settings=data.settings||settings;
      byId('instagramLink').href=settings.instagram_url||'https://www.instagram.com/';
      renderProducts();
    }catch(err){byId('products').innerHTML='<div class="empty error" style="grid-column:1/-1">Erreur de chargement : '+escapeHtml(err.message)+'<br>Vérifiez la configuration Google Sheets.</div>';}
  };
  byId('openCart').onclick=function(){renderCart();show('cartOverlay');};
  byId('checkoutBtn').onclick=function(){hide('cartOverlay');show('checkoutOverlay');};
  byId('checkoutForm').addEventListener('submit',async function(event){
    event.preventDefault();if(!cart.length){toast('Votre panier est vide.');return;}
    var button=byId('submitOrder');button.disabled=true;button.textContent='Envoi en cours…';
    var f=new FormData(event.currentTarget);
    var payload={action:'createOrder',language:'fr',customer:{name:f.get('name'),phone:f.get('phone'),city:f.get('city'),address:f.get('address'),email:f.get('email'),instructions:f.get('instructions')},items:cart.map(function(x){return {product_id:x.product_id,color:x.color,size:x.size,quantity:x.quantity};})};
    try{
      var response=await fetch('/api/order',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)});
      var data=await response.json();
      if(!response.ok||!data.ok)throw new Error(data.error||'La commande n’a pas pu être envoyée.');
      hide('checkoutOverlay');cart=[];renderCartCount();event.currentTarget.reset();
      byId('successMessage').textContent=data.message||'Votre commande a bien été reçue.';
      byId('successNumber').textContent='Numéro de commande : '+data.order_id+' · Total : '+money(data.total_mad);
      show('successOverlay');loadProducts();
    }catch(err){toast(err.message);}
    finally{button.disabled=false;button.textContent='Confirmer la commande · COD';}
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-close]'),function(b){b.addEventListener('click',function(){hide(b.getAttribute('data-close'));});});
  Array.prototype.forEach.call(document.querySelectorAll('.overlay'),function(o){o.addEventListener('click',function(e){if(e.target===o)hide(o.id);});});
  byId('year').textContent=new Date().getFullYear();
  loadProducts();
})();
</script>
</body>
</html>`;

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/health') return json({ ok: true, service: 'AIT CREATIVE Worker' });

    if (url.pathname === '/api/products') {
      if (!env.APPS_SCRIPT_URL) return json({ ok: false, error: 'APPS_SCRIPT_URL is not configured in Worker settings.' }, 500);
      try {
        const target = new URL(env.APPS_SCRIPT_URL);
        target.searchParams.set('action', 'products');
        const upstream = await fetch(target.toString(), { method: 'GET', redirect: 'follow' });
        const body = await upstream.text();
        return new Response(body, { status: upstream.status, headers: { 'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
      } catch (err) {
        return json({ ok: false, error: 'Google Apps Script request failed: ' + err.message }, 502);
      }
    }

    if (url.pathname === '/api/order') {
      if (request.method !== 'POST') return json({ ok: false, error: 'Use POST for orders.' }, 405);
      if (!env.APPS_SCRIPT_URL) return json({ ok: false, error: 'APPS_SCRIPT_URL is not configured in Worker settings.' }, 500);
      try {
        const body = await request.text();
        const upstream = await fetch(env.APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: body,
          redirect: 'follow'
        });
        const text = await upstream.text();
        return new Response(text, { status: upstream.status, headers: { 'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
      } catch (err) {
        return json({ ok: false, error: 'Order request failed: ' + err.message }, 502);
      }
    }

    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
    }
    return new Response('Not found', { status: 404 });
  }
};
