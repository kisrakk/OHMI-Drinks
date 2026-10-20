/* ===== OHMI Drinks — script =====
   Everything lives inside startOhmi(site), where "site" is the main <div class="site">. */

/* 1. All the text in English and Spanish (elements with data-i18n="key") */
const TEXT = {
  "en": {
    "navFlavours": "Flavours",
    "navShop": "Shop",
    "navStory": "Story",
    "navStockists": "Stockists",
    "navContact": "Contact",
    "cart": "CART",
    "menuPick": "PICK A CAN",
    "heroL1": "SPARKLING",
    "heroL2": "WATER",
    "heroR1": "ZERO",
    "heroR2": "SUGAR",
    "heroTag1": "Electrolytes · Real fruit · Serious fizz",
    "heroTag2": "Canned in Barcelona",
    "heroCta": "SHOP THE FLAVOURS →",
    "scrollHint": "SCROLL",
    "lookTitle": "THE LOOKBOOK",
    "lookIntro": "Ice, sunsets, neon nights and a lot of splashing. Our cans in their best light. Tap one to try it.",
    "ph2": "Sunset · Bogatell",
    "ph3": "Fresh out of the ice",
    "ph5": "Night market · Sant Antoni",
    "ph6": "Splash test · the lab",
    "ph7": "The whole family",
    "flavTitle": "FLAVOURS",
    "flavIntro": "Four cans, one idea: water that wakes you up. Tap a can to look closer.",
    "f1n": "Ice Blue",
    "f1t": "Blueberry & mint",
    "f1d": "Cool and bright, like the first jump into the sea. Juicy blueberry with a clean mint finish.",
    "f1i": "Pyrenees spring water, carbon dioxide, blueberry essence, mint extract, magnesium, potassium, sea salt.",
    "f2n": "Ultraviolet",
    "f2t": "Blackcurrant & lime",
    "f2d": "Deep and a little wild. Dark blackcurrant, then a sharp squeeze of lime. Made for late nights.",
    "f2i": "Pyrenees spring water, carbon dioxide, blackcurrant essence, lime juice, magnesium, potassium, sea salt.",
    "f3n": "Coral Spark",
    "f3t": "Blood orange & ginger",
    "f3d": "A sunset in a can. Sweet blood orange with a warm kick of fresh ginger.",
    "f3i": "Pyrenees spring water, carbon dioxide, blood orange essence, ginger extract, magnesium, potassium, sea salt.",
    "f4n": "Mint Volt",
    "f4t": "Cucumber & yuzu",
    "f4d": "Green, crisp and very awake. Fresh cucumber meets yuzu, the zingy Japanese citrus.",
    "f4i": "Pyrenees spring water, carbon dioxide, cucumber essence, yuzu juice, magnesium, potassium, sea salt.",
    "mixN": "The whole family",
    "mixT": "All four flavours",
    "mixD": "Can't choose? Get every flavour, six cans of each, in one box.",
    "mixI": "Ice Blue, Ultraviolet, Coral Spark and Mint Volt.",
    "facts": "330 ml · 0 kcal · Electrolytes",
    "look": "LOOK CLOSER →",
    "dIngredients": "What's inside",
    "dNutrition": "0 kcal · 0 g sugar · no sweeteners · vegan",
    "dFlavour": "Flavour",
    "dPack": "Pack",
    "dQty": "How many?",
    "dTotal": "Total",
    "dAdd": "ADD TO CART",
    "dAdded": "Added! ✓",
    "dGoCart": "Go to cart →",
    "close": "Close",
    "pk1": "Single can",
    "pk12": "12-pack",
    "pk24": "24-pack",
    "pkMix": "Mixed 24",
    "pkMonth": "Monthly box",
    "perMonth": "/ month",
    "shopTitle": "SHOP",
    "shopIntro": "Free delivery in Barcelona on orders over €30.",
    "s1d": "Try any flavour.",
    "s2d": "One flavour, a whole week of fizz.",
    "s3d": "All four flavours, six of each.",
    "s4d": "24 mixed cans at your door every month. Pause anytime.",
    "choose": "CHOOSE",
    "shopNote": "Demo shop: nothing is really sold.",
    "cartTitle": "YOUR CART",
    "cartEmpty": "Your cart is empty. Time to pick a flavour!",
    "cartBrowse": "SEE THE FLAVOURS →",
    "subtotal": "Subtotal",
    "shipping": "Shipping",
    "free": "Free",
    "total": "Total",
    "remove": "Remove",
    "freeHint": "Add a little more for free delivery (over €30).",
    "checkout": "GO TO CHECKOUT →",
    "keepShopping": "← Keep shopping",
    "coTitle": "CHECKOUT",
    "coWho": "1 · Who is this for?",
    "coPersonal": "Personal",
    "coBusiness": "Business",
    "coBizNote": "Business orders get an invoice with your company details.",
    "coCompany": "Company name",
    "coVat": "VAT / NIF number",
    "coContact": "2 · Contact and address",
    "coName": "Full name",
    "coEmail": "Email",
    "coPhone": "Phone",
    "coAddress": "Street and number",
    "coCity": "City",
    "coZip": "Postcode",
    "coDelivery": "3 · Delivery",
    "shipStd": "Standard · 2–3 working days",
    "shipExp": "Express · next day (Barcelona only)",
    "shipPick": "Pick up at our Poblenou studio · ready tomorrow",
    "coPay": "4 · Payment",
    "payCard": "Card",
    "payPaypal": "PayPal",
    "payBizum": "Bizum",
    "cardNum": "Card number",
    "cardExp": "Expiry (MM/YY)",
    "cardCvc": "CVC",
    "payPaypalNote": "You will be sent to PayPal to finish paying.",
    "payBizumNote": "We will send a Bizum request to your phone number.",
    "coDemo": "This is a demo shop. Please don't type real card details.",
    "coSummary": "Your order",
    "placeOrder": "PLACE ORDER",
    "backCart": "← Back to cart",
    "doneTitle": "THANK YOU!",
    "doneText": "Your order is on its way to the fizz department.",
    "doneOrder": "Order number",
    "doneArrive": "Arrives",
    "doneBack": "BACK TO HOME →",
    "storyTitle": "STORY",
    "story1": "It started in a tiny kitchen in Poblenou, on a summer afternoon that was far too hot. We wanted something cold and fizzy, but every \"healthy\" drink in the fridge was either full of sugar or tasted like nothing at all.",
    "story2": "So we started mixing. First the water: spring water from the Pyrenees, filtered slowly through rock for years before it ever reaches a can. Clean, soft and very cold.",
    "story3": "Then the spark. We added a pinch of magnesium, potassium and sea salt, the same electrolytes your body loses on a long bike ride or a night of dancing. You can't taste them, but you can feel them.",
    "story4": "The flavour comes from real fruit, cold-pressed into essences. No sweeteners, no colourings, nothing we can't pronounce. Blueberry and mint, blackcurrant and lime, blood orange and ginger, cucumber and yuzu.",
    "story5": "And we put it all in aluminium, because a can can be recycled again and again, forever. Today OHMI is in the fridges of cafés, surf houses and night markets all over Barcelona. Still small, still fizzy, still made with the same simple idea: water that wakes you up.",
    "stockTitle": "STOCKISTS",
    "stockIntro": "Find OHMI in the fridge at these places around Barcelona.",
    "k1": "Café Ola",
    "k1a": "Poblenou",
    "k2": "Mercat Verd",
    "k2a": "Gràcia",
    "k3": "Surf House Bogatell",
    "k3a": "Bogatell beach",
    "k4": "Pedal Club",
    "k4a": "Eixample",
    "k5": "Lumen Yoga",
    "k5a": "El Born",
    "k6": "Night Market 22",
    "k6a": "Sant Antoni",
    "wholesale": "Want OHMI in your shop? Write to hola@ohmidrinks.com",
    "contactT1": "SAY",
    "contactT2": "HOLA",
    "contactIntro": "Questions, wholesale, collaborations or just a hello. We read everything and reply within a day.",
    "cWrite": "Write",
    "cVisit": "Visit",
    "cCall": "Call",
    "addr1": "Carrer de Pujades 101",
    "addr2": "08005 Barcelona",
    "hours": "Mon–Fri · 10:00–18:00",
    "formTitle": "Send us a message",
    "fName": "Name",
    "fEmail": "Email",
    "fTopic": "Topic",
    "topic1": "Just saying hola",
    "topic2": "A question about my order",
    "topic3": "Wholesale / my shop",
    "topic4": "Press & collaborations",
    "fMsg": "Message",
    "fSend": "SEND MESSAGE",
    "fThanks": "Thanks! Your message landed. We'll write back soon.",
    "newsTitle": "New flavours, first",
    "newsBtn": "SIGN ME UP",
    "newsThanks": "You're in! ✓",
    "credit": "Concept website · design & code by Kisrak Kulacoglu"
  },
  "es": {
    "navFlavours": "Sabores",
    "navShop": "Tienda",
    "navStory": "Historia",
    "navStockists": "Dónde comprar",
    "navContact": "Contacto",
    "cart": "CESTA",
    "menuPick": "ELIGE UNA LATA",
    "heroL1": "AGUA CON",
    "heroL2": "GAS",
    "heroR1": "CERO",
    "heroR2": "AZÚCAR",
    "heroTag1": "Electrolitos · Fruta de verdad · Burbuja intensa",
    "heroTag2": "Enlatada en Barcelona",
    "heroCta": "VER LOS SABORES →",
    "scrollHint": "DESLIZA",
    "lookTitle": "EL LOOKBOOK",
    "lookIntro": "Hielo, atardeceres, noches de neón y muchas salpicaduras. Nuestras latas en su mejor luz. Toca una para probarla.",
    "ph2": "Atardecer · Bogatell",
    "ph3": "Recién salida del hielo",
    "ph5": "Mercado nocturno · Sant Antoni",
    "ph6": "Prueba de salpicadura · el laboratorio",
    "ph7": "La familia completa",
    "flavTitle": "SABORES",
    "flavIntro": "Cuatro latas, una idea: agua que te despierta. Toca una lata para verla de cerca.",
    "f1n": "Ice Blue",
    "f1t": "Arándano y menta",
    "f1d": "Fresca y luminosa, como el primer salto al mar. Arándano jugoso con un final limpio de menta.",
    "f1i": "Agua de manantial del Pirineo, dióxido de carbono, esencia de arándano, extracto de menta, magnesio, potasio, sal marina.",
    "f2n": "Ultravioleta",
    "f2t": "Grosella negra y lima",
    "f2d": "Intensa y un poco salvaje. Grosella negra y un toque ácido de lima. Hecha para las noches largas.",
    "f2i": "Agua de manantial del Pirineo, dióxido de carbono, esencia de grosella negra, zumo de lima, magnesio, potasio, sal marina.",
    "f3n": "Coral Spark",
    "f3t": "Naranja sanguina y jengibre",
    "f3d": "Un atardecer en lata. Naranja sanguina dulce con el toque cálido del jengibre fresco.",
    "f3i": "Agua de manantial del Pirineo, dióxido de carbono, esencia de naranja sanguina, extracto de jengibre, magnesio, potasio, sal marina.",
    "f4n": "Mint Volt",
    "f4t": "Pepino y yuzu",
    "f4d": "Verde, crujiente y muy despierta. Pepino fresco con yuzu, el cítrico japonés más vibrante.",
    "f4i": "Agua de manantial del Pirineo, dióxido de carbono, esencia de pepino, zumo de yuzu, magnesio, potasio, sal marina.",
    "mixN": "La familia completa",
    "mixT": "Los cuatro sabores",
    "mixD": "¿No sabes cuál elegir? Todos los sabores, seis latas de cada uno, en una caja.",
    "mixI": "Ice Blue, Ultravioleta, Coral Spark y Mint Volt.",
    "facts": "330 ml · 0 kcal · Electrolitos",
    "look": "VER DE CERCA →",
    "dIngredients": "Qué lleva",
    "dNutrition": "0 kcal · 0 g azúcar · sin edulcorantes · vegana",
    "dFlavour": "Sabor",
    "dPack": "Pack",
    "dQty": "¿Cuántos?",
    "dTotal": "Total",
    "dAdd": "AÑADIR A LA CESTA",
    "dAdded": "¡Añadido! ✓",
    "dGoCart": "Ir a la cesta →",
    "close": "Cerrar",
    "pk1": "Lata suelta",
    "pk12": "Pack de 12",
    "pk24": "Pack de 24",
    "pkMix": "Mix de 24",
    "pkMonth": "Caja mensual",
    "perMonth": "/ mes",
    "shopTitle": "TIENDA",
    "shopIntro": "Envío gratis en Barcelona a partir de 30 €.",
    "s1d": "Prueba cualquier sabor.",
    "s2d": "Un sabor, una semana entera de burbujas.",
    "s3d": "Los cuatro sabores, seis de cada.",
    "s4d": "24 latas variadas en tu puerta cada mes. Pausa cuando quieras.",
    "choose": "ELEGIR",
    "shopNote": "Tienda de demostración: no se vende nada de verdad.",
    "cartTitle": "TU CESTA",
    "cartEmpty": "Tu cesta está vacía. ¡Es hora de elegir un sabor!",
    "cartBrowse": "VER LOS SABORES →",
    "subtotal": "Subtotal",
    "shipping": "Envío",
    "free": "Gratis",
    "total": "Total",
    "remove": "Quitar",
    "freeHint": "Añade un poco más para el envío gratis (desde 30 €).",
    "checkout": "TRAMITAR PEDIDO →",
    "keepShopping": "← Seguir comprando",
    "coTitle": "PAGO",
    "coWho": "1 · ¿Para quién es?",
    "coPersonal": "Particular",
    "coBusiness": "Empresa",
    "coBizNote": "Los pedidos de empresa reciben factura con los datos fiscales.",
    "coCompany": "Nombre de la empresa",
    "coVat": "NIF / CIF",
    "coContact": "2 · Contacto y dirección",
    "coName": "Nombre completo",
    "coEmail": "Correo",
    "coPhone": "Teléfono",
    "coAddress": "Calle y número",
    "coCity": "Ciudad",
    "coZip": "Código postal",
    "coDelivery": "3 · Entrega",
    "shipStd": "Estándar · 2–3 días laborables",
    "shipExp": "Exprés · al día siguiente (solo Barcelona)",
    "shipPick": "Recogida en nuestro estudio de Poblenou · lista mañana",
    "coPay": "4 · Pago",
    "payCard": "Tarjeta",
    "payPaypal": "PayPal",
    "payBizum": "Bizum",
    "cardNum": "Número de tarjeta",
    "cardExp": "Caducidad (MM/AA)",
    "cardCvc": "CVC",
    "payPaypalNote": "Te llevaremos a PayPal para terminar el pago.",
    "payBizumNote": "Te enviaremos una solicitud de Bizum a tu teléfono.",
    "coDemo": "Esta es una tienda de demostración. No escribas datos reales de tarjeta.",
    "coSummary": "Tu pedido",
    "placeOrder": "REALIZAR PEDIDO",
    "backCart": "← Volver a la cesta",
    "doneTitle": "¡GRACIAS!",
    "doneText": "Tu pedido ya va camino del departamento de burbujas.",
    "doneOrder": "Número de pedido",
    "doneArrive": "Llega",
    "doneBack": "VOLVER AL INICIO →",
    "storyTitle": "HISTORIA",
    "story1": "Empezó en una cocina diminuta de Poblenou, una tarde de verano demasiado calurosa. Queríamos algo frío y con burbujas, pero todas las bebidas \"sanas\" de la nevera o estaban llenas de azúcar o no sabían a nada.",
    "story2": "Así que empezamos a mezclar. Primero el agua: agua de manantial del Pirineo, filtrada lentamente por la roca durante años antes de llegar a una lata. Limpia, suave y muy fría.",
    "story3": "Después, la chispa. Añadimos una pizca de magnesio, potasio y sal marina, los mismos electrolitos que pierdes en una ruta en bici o en una noche de baile. No se notan en el sabor, pero sí en el cuerpo.",
    "story4": "El sabor viene de fruta de verdad, prensada en frío. Sin edulcorantes, sin colorantes, nada que no sepamos pronunciar. Arándano y menta, grosella y lima, naranja sanguina y jengibre, pepino y yuzu.",
    "story5": "Y lo metimos todo en aluminio, porque una lata se puede reciclar una y otra vez, para siempre. Hoy OHMI está en las neveras de cafés, escuelas de surf y mercados nocturnos de toda Barcelona. Seguimos siendo pequeños, seguimos con burbujas y con la misma idea sencilla: agua que te despierta.",
    "stockTitle": "DÓNDE COMPRAR",
    "stockIntro": "Encuentra OHMI en la nevera de estos sitios de Barcelona.",
    "k1": "Café Ola",
    "k1a": "Poblenou",
    "k2": "Mercat Verd",
    "k2a": "Gràcia",
    "k3": "Surf House Bogatell",
    "k3a": "Playa del Bogatell",
    "k4": "Pedal Club",
    "k4a": "Eixample",
    "k5": "Lumen Yoga",
    "k5a": "El Born",
    "k6": "Night Market 22",
    "k6a": "Sant Antoni",
    "wholesale": "¿Quieres OHMI en tu tienda? Escribe a hola@ohmidrinks.com",
    "contactT1": "DI",
    "contactT2": "HOLA",
    "contactIntro": "Preguntas, venta al por mayor, colaboraciones o solo un hola. Lo leemos todo y respondemos en un día.",
    "cWrite": "Escríbenos",
    "cVisit": "Visítanos",
    "cCall": "Llámanos",
    "addr1": "Carrer de Pujades 101",
    "addr2": "08005 Barcelona",
    "hours": "Lun–Vie · 10:00–18:00",
    "formTitle": "Envíanos un mensaje",
    "fName": "Nombre",
    "fEmail": "Correo",
    "fTopic": "Tema",
    "topic1": "Solo un hola",
    "topic2": "Una duda sobre mi pedido",
    "topic3": "Venta al por mayor / mi tienda",
    "topic4": "Prensa y colaboraciones",
    "fMsg": "Mensaje",
    "fSend": "ENVIAR MENSAJE",
    "fThanks": "¡Gracias! Hemos recibido tu mensaje. Te responderemos pronto.",
    "newsTitle": "Sabores nuevos, antes que nadie",
    "newsBtn": "APÚNTAME",
    "newsThanks": "¡Ya estás dentro! ✓",
    "credit": "Web conceptual · diseño y código de Kisrak Kulacoglu"
  }
};

/* 2. Background colours for each page: [darkest, dark, middle, light] */
const PALETTES = {
  "home": [
    "#050A2E",
    "#0E4A9A",
    "#1E8FE8",
    "#8FD8FF"
  ],
  "flavours": [
    "#12052E",
    "#4A1FA8",
    "#8A5CFF",
    "#DCC8FF"
  ],
  "shop": [
    "#021C1E",
    "#06646A",
    "#12C2C0",
    "#A6FFF4"
  ],
  "story": [
    "#1E0602",
    "#8A2A06",
    "#FF6A1A",
    "#FFC98A"
  ],
  "stockists": [
    "#1E0418",
    "#8A1252",
    "#E2508E",
    "#FFC4DE"
  ],
  "contact": [
    "#031C10",
    "#0B6A44",
    "#22C98A",
    "#B4FFDA"
  ]
};

/* 3. The products */
const FLAVOURS = {
  ice:    { n: 'f1n', t: 'f1t', d: 'f1d', i: 'f1i', color: '#1E5BFF' },
  violet: { n: 'f2n', t: 'f2t', d: 'f2d', i: 'f2i', color: '#8A5CFF' },
  coral:  { n: 'f3n', t: 'f3t', d: 'f3d', i: 'f3i', color: '#FF6A1A' },
  mint:   { n: 'f4n', t: 'f4t', d: 'f4d', i: 'f4i', color: '#22C98A' },
  mix:    { n: 'mixN', t: 'mixT', d: 'mixD', i: 'mixI', color: 'conic-gradient(#1E5BFF 0 25%, #8A5CFF 0 50%, #FF6A1A 0 75%, #22C98A 0)' }
};
const PACKS = {
  '1':     { label: 'pk1',     price: 2.2 },
  '12':    { label: 'pk12',    price: 22 },
  '24':    { label: 'pk24',    price: 39 },
  'mix':   { label: 'pkMix',   price: 39 },
  'month': { label: 'pkMonth', price: 34 }
};
const FREE_FROM = 30;       // free standard delivery from €30
const SHIP = { standard: 3.9, express: 6.9, pickup: 0 };
const SHIP_DAYS = { standard: 3, express: 1, pickup: 1 };

const VERTEX_SHADER = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';
const FRAGMENT_SHADER = [
  "precision highp float;",
  "uniform vec2 r;uniform float t;uniform vec3 c0;uniform vec3 c1;uniform vec3 c2;uniform vec3 c3;",
  "float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}",
  "float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1.0,0.0)),u.x),mix(h(i+vec2(0.0,1.0)),h(i+vec2(1.0,1.0)),u.x),u.y);}",
  "float fbm(vec2 p){float v=0.0,a=0.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<5;i++){v+=a*n(p);p=m*p;a*=0.5;}return v;}",
  "void main(){",
  "vec2 uv=gl_FragCoord.xy/r.y*1.25;float tt=t*0.06;",
  "vec2 q=vec2(fbm(uv*1.2+vec2(tt,0.0)),fbm(uv*1.2+vec2(4.1,2.7)-vec2(0.0,tt)));",
  "vec2 p2=uv+1.1*q+vec2(tt*0.3,-tt*0.2);",
  "float base=fbm(p2*1.4+tt*0.4);",
  "float r1=pow(1.0-abs(fbm(p2*1.9-tt*0.35)*2.0-1.0),5.0);",
  "float r2=pow(1.0-abs(fbm(p2*4.2+vec2(3.0,7.0)+tt*0.5)*2.0-1.0),9.0);",
  "float ang=(q.x-q.y)*5.0+fbm(p2*0.8)*3.0;mat2 R=mat2(cos(ang),sin(ang),-sin(ang),cos(ang));",
  "vec2 fp=R*(gl_FragCoord.xy/r.y)*vec2(2.5,70.0);float fib=n(fp+vec2(0.0,tt*8.0))*0.6+n(fp*1.9)*0.4;",
  "float cell=smoothstep(0.28,0.62,fbm(p2*1.1+vec2(9.0,3.0)-tt*0.3));",
  "float L=base*0.65*cell+0.1+r1*0.7+r2*0.35;",
  "L+=(fib-0.5)*0.2*smoothstep(0.2,0.7,L);",
  "L*=0.55+0.45*cell+r1*0.3;",
  "vec3 col=mix(c0,c1,smoothstep(0.0,0.32,L));",
  "col=mix(col,c2,smoothstep(0.28,0.62,L));",
  "col=mix(col,c3,smoothstep(0.58,0.95,L));",
  "col=mix(col,mix(c3,vec3(1.0),0.75),smoothstep(1.0,1.5,L)*0.8);",
  "gl_FragColor=vec4(col,1.0);}"
].join('\n');

function startOhmi(site) {
  const $ = function (sel) { return site.querySelector(sel); };
  const $$ = function (sel) { return site.querySelectorAll(sel); };
  let lang = 'en';
  let cart = [];                                    // e.g. [{ flavour: 'ice', pack: '12', qty: 2 }]
  const detail = { flavour: 'ice', pack: '1', qty: 1 };

  const t = function (key) { return TEXT[lang][key] || key; };
  const money = function (n) {
    return new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(n);
  };

  /* ---- language ---- */
  function setLanguage(code) {
    lang = code;
    site.setAttribute('lang', code);
    site.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    $$('[data-lang]').forEach(function (b) { b.dataset.active = b.dataset.lang === code ? 'true' : 'false'; });
    $$('.money').forEach(function (el) { el.textContent = money(Number(el.dataset.eur)); });
    renderDetail();
    renderCart();
    try { localStorage.setItem('oh-lang', code); } catch (e) {}
  }

  /* ---- pages ---- */
  function goTo(page) {
    site.dataset.page = page;
    site.dataset.menu = 'false';
    site.dataset.modal = 'closed';
    if (page === 'cart' || page === 'checkout') renderCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---- product detail window ---- */
  function openDetail(flavour, pack) {
    detail.flavour = flavour;
    detail.pack = pack || (flavour === 'mix' ? 'mix' : '1');
    detail.qty = 1;
    $('.detail').dataset.added = 'false';
    renderDetail();
    site.dataset.modal = 'open';
  }
  function renderDetail() {
    const box = $('.detail');
    const f = FLAVOURS[detail.flavour];
    box.dataset.flavour = detail.flavour;
    $('.js-d-name').textContent = t(f.n);
    $('.js-d-taste').textContent = t(f.t);
    $('.js-d-desc').textContent = t(f.d);
    $('.js-d-ingredients').textContent = t(f.i);
    const mixed = detail.flavour === 'mix';
    $$('[data-set-pack]').forEach(function (b) {
      const p = b.dataset.setPack;
      b.hidden = mixed ? !(p === 'mix' || p === 'month') : (p === 'mix' || p === 'month');
      b.dataset.on = p === detail.pack ? 'true' : 'false';
    });
    $('.js-qty').textContent = detail.qty;
    $('.js-d-total').textContent = money(PACKS[detail.pack].price * detail.qty);
  }

  /* ---- cart ---- */
  function addToCart(flavour, pack, qty) {
    const found = cart.find(function (item) { return item.flavour === flavour && item.pack === pack; });
    if (found) found.qty += qty;
    else cart.push({ flavour: flavour, pack: pack, qty: qty });
    renderCart();
  }
  function totals() {
    const subtotal = cart.reduce(function (sum, item) { return sum + PACKS[item.pack].price * item.qty; }, 0);
    const form = $('#oh-checkout');
    const method = form.elements.ship.value || 'standard';
    let shipping = SHIP[method];
    if (method === 'standard' && subtotal >= FREE_FROM) shipping = 0;
    return { subtotal: subtotal, shipping: shipping, total: subtotal + shipping, method: method };
  }
  function itemName(item) {
    return item.flavour === 'mix' ? t('mixN') : t(FLAVOURS[item.flavour].n);
  }
  function renderCart() {
    const count = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
    $('.cart-count').textContent = count;
    site.dataset.cart = cart.length ? 'full' : 'empty';
    const sums = totals();
    site.dataset.free = sums.subtotal >= FREE_FROM ? 'yes' : 'no';

    $('.cart-list').innerHTML = cart.map(function (item, index) {
      return '<div class="cart-item">' +
        '<span class="ci-dot" style="background:' + FLAVOURS[item.flavour].color + '"></span>' +
        '<div class="ci-info"><p class="ci-name">' + itemName(item) + '</p><p class="ci-pack">' + t(PACKS[item.pack].label) + ' · ' + money(PACKS[item.pack].price) + '</p>' +
        '<button type="button" class="ci-remove" data-cart-remove="' + index + '">' + t('remove') + '</button></div>' +
        '<div class="qty"><button type="button" data-cart-qty="' + index + '|-1" aria-label="Less">−</button><span>' + item.qty + '</span><button type="button" data-cart-qty="' + index + '|1" aria-label="More">+</button></div>' +
        '<span class="ci-price">' + money(PACKS[item.pack].price * item.qty) + '</span></div>';
    }).join('');

    $('.co-items').innerHTML = cart.map(function (item) {
      return '<p><span>' + item.qty + ' × ' + itemName(item) + ' · ' + t(PACKS[item.pack].label) + '</span><span>' + money(PACKS[item.pack].price * item.qty) + '</span></p>';
    }).join('');

    $$('.js-subtotal').forEach(function (el) { el.textContent = money(sums.subtotal); });
    $$('.js-shipping').forEach(function (el) { el.textContent = sums.shipping === 0 ? t('free') : money(sums.shipping); });
    $$('.js-total').forEach(function (el) { el.textContent = money(sums.total); });
    $('.js-ship-std').textContent = sums.subtotal >= FREE_FROM ? t('free') : money(SHIP.standard);
  }

  /* ---- clicks (one listener for everything) ---- */
  site.addEventListener('click', function (event) {
    const el = event.target.closest('[data-go],[data-lang],[data-menu-toggle],[data-detail],[data-detail-pack],[data-set-flavour],[data-set-pack],[data-qty],[data-add-detail],[data-close-detail],[data-cart-qty],[data-cart-remove]');
    if (!el) {
      if (event.target.classList.contains('detail')) site.dataset.modal = 'closed'; // click outside the window
      return;
    }
    const d = el.dataset;
    if (d.go) { event.preventDefault(); goTo(d.go); }
    else if (d.lang) setLanguage(d.lang);
    else if ('menuToggle' in d) site.dataset.menu = site.dataset.menu === 'true' ? 'false' : 'true';
    else if (d.detail) openDetail(d.detail);
    else if (d.detailPack) openDetail(d.detailPack === 'mix' || d.detailPack === 'month' ? 'mix' : 'ice', d.detailPack);
    else if (d.setFlavour) { detail.flavour = d.setFlavour; renderDetail(); }
    else if (d.setPack) { detail.pack = d.setPack; renderDetail(); }
    else if (d.qty) { detail.qty = Math.max(1, Math.min(99, detail.qty + Number(d.qty))); renderDetail(); }
    else if ('addDetail' in d) { addToCart(detail.flavour, detail.pack, detail.qty); $('.detail').dataset.added = 'true'; }
    else if ('closeDetail' in d) site.dataset.modal = 'closed';
    else if (d.cartQty) {
      const parts = d.cartQty.split('|');
      const item = cart[Number(parts[0])];
      item.qty += Number(parts[1]);
      if (item.qty < 1) cart.splice(Number(parts[0]), 1);
      renderCart();
    }
    else if (d.cartRemove) { cart.splice(Number(d.cartRemove), 1); renderCart(); }
  });
  site.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') site.dataset.modal = 'closed';
  });

  /* ---- checkout form ---- */
  const checkout = $('#oh-checkout');
  checkout.addEventListener('change', function () {
    checkout.dataset.buyer = checkout.elements.buyer.value;
    checkout.dataset.pay = checkout.elements.pay.value;
    checkout.elements.company.required = checkout.dataset.buyer === 'business';
    renderCart();
  });
  checkout.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!cart.length) { goTo('cart'); return; }
    if (!checkout.checkValidity()) { checkout.reportValidity(); return; }
    const sums = totals();
    const arrive = new Date();
    let days = SHIP_DAYS[sums.method];
    while (days > 0) { arrive.setDate(arrive.getDate() + 1); if (arrive.getDay() !== 0 && arrive.getDay() !== 6) days--; }
    $('.js-order').textContent = 'OH-' + Math.floor(10000 + Math.random() * 89999);
    $('.js-arrive').textContent = arrive.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    $('.js-paid').textContent = money(sums.total);
    cart = [];
    checkout.reset();
    checkout.dataset.buyer = 'personal';
    checkout.dataset.pay = 'card';
    renderCart();
    goTo('done');
  });

  /* ---- contact + newsletter (demo: nothing is sent) ---- */
  ['#oh-contact', '#oh-news'].forEach(function (id) {
    const form = $(id);
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.dataset.sent = 'true';
      form.reset();
    });
  });

  /* ---- the electric background (WebGL) ---- */
  const canvas = $('.bg-canvas');
  const gl = canvas.getContext('webgl', { antialias: false });
  if (gl) {
    const makeShader = function (type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, makeShader(gl.VERTEX_SHADER, VERTEX_SHADER));
    gl.attachShader(program, makeShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
    gl.linkProgram(program);
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const uResolution = gl.getUniformLocation(program, 'r');
    const uTime = gl.getUniformLocation(program, 't');
    const uColors = [0, 1, 2, 3].map(function (i) { return gl.getUniformLocation(program, 'c' + i); });
    const hexToRgb = function (hex) {
      const n = parseInt(hex.replace('#', ''), 16);
      return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startTime = performance.now() - 20000;
    let current = PALETTES.home.map(hexToRgb);
    const draw = function (now) {
      if (!site.isConnected) return;                   // stop if the page is gone
      const w = Math.max(1, Math.round(canvas.clientWidth * 0.5));
      const h = Math.max(1, Math.round(canvas.clientHeight * 0.5));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uResolution, w, h);
      gl.uniform1f(uTime, reduceMotion ? 20 : (now - startTime) / 1000);
      const target = (PALETTES[site.dataset.page] || PALETTES.home).map(hexToRgb);
      for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) current[i][k] += (target[i][k] - current[i][k]) * 0.045;
        gl.uniform3f(uColors[i], current[i][0], current[i][1], current[i][2]);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  /* ---- start ---- */
  let startLang = 'en';
  try { startLang = localStorage.getItem('oh-lang') || 'en'; } catch (e) {}
  setLanguage(startLang);
}

/* Run it when the page has loaded */
const siteElement = document.querySelector('.site');
if (siteElement) startOhmi(siteElement);
