// DATASET
const categorias = [
  { id: 'harinas', nombre: 'Harinas', cocina: 'latina', micro: 'Maíz precocido, trigo y mezclas' },
  { id: 'frijoles', nombre: 'Frijoles', cocina: 'latina', micro: 'Negros, rojos, pintos a granel' },
  { id: 'conservas-lat', nombre: 'Conservas Latinas', cocina: 'latina', micro: 'Ajíes, salsas y purés' },
  { id: 'especias', nombre: 'Especias', cocina: 'arabe', micro: 'Mezclas y monovarietales' },
  { id: 'legumbres', nombre: 'Legumbres', cocina: 'arabe', micro: 'Garbanzos, lentejas y habas' },
  { id: 'conservas-ar', nombre: 'Conservas Árabes', cocina: 'arabe', micro: 'Tahini, harissa y más' },
  { id: 'arroces', nombre: 'Arroces Especiales', cocina: 'asiatica', micro: 'Jazmín, basmati y glutinoso' },
  { id: 'salsas', nombre: 'Salsas y Condimentos', cocina: 'asiatica', micro: 'Soja, ostras, sriracha' },
  { id: 'fideos', nombre: 'Fideos', cocina: 'asiatica', micro: 'De arroz, trigo y soba' }
];

// Base path para recursos (páginas en subcarpetas usan ../)
// Base path: '' en raíz, '../' en productos/ o recetas/
const BASE = (() => { const p = window.location.pathname || ''; if (p.includes('productos') || p.includes('recetas')) return '../'; return ''; })();

const productos = [
  { id: 'p1', nombre: 'Harina de Maíz Precocida', cocina: 'latina', categoria: 'harinas', formato: '25kg', etiquetas: ['sin gluten', 'granel'], imagen: BASE + 'assets/img/products_img/p1-harina-maiz.png' },
  { id: 'p2', nombre: 'Frijol Negro', cocina: 'latina', categoria: 'frijoles', formato: '10kg / 25kg', etiquetas: ['natural', 'horeca'], imagen: BASE + 'assets/img/products_img/p2-frijol-negro.png' },
  { id: 'p3', nombre: 'Ají Amarillo Pasta', cocina: 'latina', categoria: 'conservas-lat', formato: 'Cubo 3kg', etiquetas: ['horeca'], imagen: BASE + 'assets/img/products_img/p3-aji-amarillo.png' },
  { id: 'p4', nombre: 'Frijol Rojo', cocina: 'latina', categoria: 'frijoles', formato: '10kg', etiquetas: ['natural'], imagen: BASE + 'assets/img/products_img/p4-frijol-rojo.png' },
  { id: 'p5', nombre: 'Ras el Hanout', cocina: 'arabe', categoria: 'especias', formato: '1kg / 5kg', etiquetas: ['mezcla', 'horeca'], imagen: BASE + 'assets/img/products_img/p5-ras-el-hanout.png' },
  { id: 'p6', nombre: 'Garbanzo Pedrosillano', cocina: 'arabe', categoria: 'legumbres', formato: '25kg', etiquetas: ['natural', 'granel'], imagen: BASE + 'assets/img/products_img/p6-garbanzo.png' },
  { id: 'p7', nombre: 'Pasta de Sésamo (Tahini)', cocina: 'arabe', categoria: 'conservas-ar', formato: 'Cubo 5kg', etiquetas: ['horeca', 'vegan'], imagen: BASE + 'assets/img/products_img/p7-tahini.png' },
  { id: 'p8', nombre: 'Comino Molido', cocina: 'arabe', categoria: 'especias', formato: '5kg', etiquetas: ['puro'], imagen: BASE + 'assets/img/products_img/p8-comino.png' },
  { id: 'p9', nombre: 'Arroz Jazmín', cocina: 'asiatica', categoria: 'arroces', formato: '20kg', etiquetas: ['premium', 'granel'], imagen: BASE + 'assets/img/products_img/p9-arroz-jazmin.png' },
  { id: 'p10', nombre: 'Salsa de Soja Oscura', cocina: 'asiatica', categoria: 'salsas', formato: 'Garrafa 10L', etiquetas: ['horeca', 'fermentado'], imagen: BASE + 'assets/img/products_img/p10-salsa-soja.png' },
  { id: 'p11', nombre: 'Fideos de Arroz', cocina: 'asiatica', categoria: 'fideos', formato: 'Caja 5kg', etiquetas: ['sin gluten', 'horeca'], imagen: BASE + 'assets/img/products_img/p11-fideos-arroz.png' },
  { id: 'p12', nombre: 'Arroz Glutinoso', cocina: 'asiatica', categoria: 'arroces', formato: '20kg', etiquetas: ['premium'], imagen: BASE + 'assets/img/products_img/p12-arroz-glutinoso.png' }
];

const recetas = [
  {
    id: 'r1', titulo: 'Arepas Industriales', cocina: 'latina',
    imagen: BASE + 'assets/img/recetas_img/r1-arepas.png',
    desc: 'Arepa de maíz precocida para líneas de food service y retail. Base versátil para rellenos diversos.',
    contexto: 'La arepa es un pilar de la gastronomía latinoamericana con crecimiento sostenido en Europa. Su formato versátil permite múltiples rellenos y presentaciones, adaptándose tanto a líneas de congelados como a food service.',
    ingredientes: ['Harina de maíz precocida (25kg)', 'Queso blanco rallado (5kg)', 'Frijoles negros (20kg)'],
    canales: ['Retail — Congelados', 'HORECA — Brunch & Casual Dining', 'Food Service — Catering'],
    ventajas: ['Sin gluten de forma natural', 'Alta vida útil en formato congelado', 'Margen atractivo en carta de restaurante']
  },
  {
    id: 'r2', titulo: 'Hummus de Garbanzo', cocina: 'arabe',
    imagen: BASE + 'assets/img/recetas_img/r2-hummus.png',
    desc: 'Crema de garbanzo con tahini para untables industriales. Alta demanda en retail europeo.',
    contexto: 'El hummus se ha consolidado como el untable saludable de referencia en Europa. Su producción industrial requiere garbanzos de calibre específico y tahini de calidad para garantizar textura y sabor consistentes.',
    ingredientes: ['Garbanzo seco calibre 9mm (25kg)', 'Pasta de tahini (5kg)', 'Comino molido (1kg)', 'Ácido cítrico alimentario'],
    canales: ['Retail — Untables refrigerados', 'HORECA — Tapas & Mezze', 'Industria — Co-packing'],
    ventajas: ['Producto vegano y plant-based', 'Tendencia consolidada en Europa', 'Escalable a múltiples sabores']
  },
  {
    id: 'r3', titulo: 'Pad Thai Auténtico', cocina: 'asiatica',
    imagen: BASE + 'assets/img/recetas_img/r3-padthai.png',
    desc: 'Noodles de arroz salteados con salsa de tamarindo. Formato wok para HORECA y platos preparados.',
    contexto: 'El Pad Thai es la puerta de entrada a la cocina tailandesa para el consumidor europeo. Su formato wok permite una preparación rápida en cocina profesional y se adapta perfectamente a líneas de platos preparados.',
    ingredientes: ['Fideos de arroz (5kg)', 'Pasta de tamarindo (1kg)', 'Salsa de pescado (1L)', 'Cacahuete tostado (5kg)'],
    canales: ['HORECA — Restaurantes asiáticos', 'Retail — Platos preparados', 'Delivery — Dark kitchens'],
    ventajas: ['Sin gluten (base de arroz)', 'Preparación en menos de 8 minutos', 'Alto ticket medio en carta']
  },
  {
    id: 'r4', titulo: 'Feijoada Base', cocina: 'latina',
    imagen: BASE + 'assets/img/recetas_img/r4-feijoada.png',
    desc: 'Guiso brasileño de frijoles negros. Base concentrada para líneas de platos preparados.',
    contexto: 'La feijoada es el plato nacional de Brasil y tiene gran potencial en el mercado europeo de platos preparados étnicos. Su formato base concentrada permite a fabricantes añadir proteínas y personalizar según mercado.',
    ingredientes: ['Frijol negro (20kg)', 'Hoja de laurel (500g)', 'Comino en grano (1kg)', 'Ajo granulado (1kg)'],
    canales: ['Industria — Platos preparados', 'HORECA — Buffets & Catering', 'Retail — Conservas premium'],
    ventajas: ['Producto comfort food con identidad', 'Base estable para personalización', 'Rico en proteína vegetal']
  },
  {
    id: 'r5', titulo: 'Falafel Tradicional', cocina: 'arabe',
    imagen: BASE + 'assets/img/recetas_img/r5-falafel.png',
    desc: 'Croqueta de garbanzo especiada. Formato congelado para food service y retail vegano.',
    contexto: 'El falafel se ha convertido en el producto estrella del segmento plant-based en Europa. Su formato congelado IQF permite distribución eficiente y preparación instantánea en HORECA.',
    ingredientes: ['Garbanzo seco (25kg)', 'Cilantro seco (1kg)', 'Comino molido (1kg)', 'Perejil deshidratado (500g)'],
    canales: ['Retail — Congelados veganos', 'HORECA — Street food & Casual', 'Industria — IQF'],
    ventajas: ['100% vegano y plant-based', 'Formato IQF para máxima eficiencia', 'Tendencia creciente en toda Europa']
  },
  {
    id: 'r6', titulo: 'Arroz Frito Yangchow', cocina: 'asiatica',
    imagen: BASE + 'assets/img/recetas_img/r6-arrozfrito.png',
    desc: 'Arroz salteado con vegetales y proteína. Aplicación estrella para líneas de congelados asiáticos.',
    contexto: 'El arroz frito estilo Yangchow es uno de los productos asiáticos congelados con mayor rotación en retail europeo. Su producción industrial requiere arroz de grano largo con bajo contenido de almidón para evitar apelmazamiento.',
    ingredientes: ['Arroz grano largo (25kg)', 'Salsa de soja (5L)', 'Aceite de sésamo (1L)', 'Jengibre molido (1kg)'],
    canales: ['Retail — Congelados', 'HORECA — Wok stations', 'Delivery — Meal kits'],
    ventajas: ['Alta rotación en lineal', 'Coste de producción competitivo', 'Adaptable a múltiples variantes']
  },
  {
    id: 'r7', titulo: 'Tacos Al Pastor', cocina: 'latina',
    imagen: BASE + 'assets/img/recetas_img/r7-tacos.png',
    desc: 'Tortilla de maíz con carne especiada y piña. Formato kit para retail y HORECA.',
    contexto: 'Los tacos al pastor representan la tendencia mexicana más fuerte en Europa. El formato kit (tortillas + salsa + especias) permite a retailers y HORECA ofrecer una experiencia auténtica sin complejidad operativa.',
    ingredientes: ['Tortilla de maíz (paquete industrial)', 'Chile guajillo seco (1kg)', 'Achiote en pasta (500g)', 'Piña deshidratada (2kg)'],
    canales: ['Retail — Meal kits', 'HORECA — Taquerías & Casual', 'Food Service — Eventos'],
    ventajas: ['Formato kit listo para vender', 'Experiencia gastronómica completa', 'Categoría en fuerte crecimiento']
  },
  {
    id: 'r8', titulo: 'Shawarma', cocina: 'arabe',
    imagen: BASE + 'assets/img/recetas_img/r8-shawarma.png',
    desc: 'Wrap de carne especiada con salsa de ajo. Producto estrella en street food y delivery.',
    contexto: 'El shawarma es el producto de street food árabe con mayor penetración en Europa. Su formato wrap permite servicio rápido y es ideal para delivery. La clave está en la mezcla de especias y la salsa de ajo (toum).',
    ingredientes: ['Mix de especias shawarma (1kg)', 'Pan pita (paquete industrial)', 'Pasta de ajo (2kg)', 'Encurtidos árabes (5kg)'],
    canales: ['HORECA — Street food & Kebab', 'Delivery — Dark kitchens', 'Retail — Wraps preparados'],
    ventajas: ['Ticket medio alto en delivery', 'Operación simple y escalable', 'Demanda estable todo el año']
  },
  {
    id: 'r9', titulo: 'Ramen Tonkotsu', cocina: 'asiatica',
    imagen: BASE + 'assets/img/recetas_img/r9-ramen.png',
    desc: 'Caldo de cerdo con noodles, huevo y chashu. Formato bowl para HORECA y meal kits.',
    contexto: 'El ramen ha pasado de nicho a mainstream en Europa. El formato bowl premium permite posicionamiento alto en HORECA y meal kits. La base de caldo concentrado es el componente clave para escalar producción.',
    ingredientes: ['Fideos ramen (5kg)', 'Pasta de miso (2kg)', 'Salsa de soja oscura (5L)', 'Aceite de sésamo tostado (1L)'],
    canales: ['HORECA — Ramen bars & Casual', 'Retail — Meal kits premium', 'Industria — Caldos concentrados'],
    ventajas: ['Posicionamiento premium', 'Formato bowl en tendencia', 'Componentes con alta vida útil']
  }
];

// FUNCIONES CORE
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initReveal();
  initSearch();
  initChips();
  initCustomSelects();
  
  if (document.getElementById('cc-nav')) initHome();
  if (document.getElementById('recipes-grid')) initRecipes();
  if (document.getElementById('recipe-detail')) initRecipeDetail();
  if (document.getElementById('contact-form')) initContactForm();
});

function initCustomSelects() {
  document.querySelectorAll('select.form-control').forEach(sel => {
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select';
    
    const options = Array.from(sel.options);
    const placeholderText = options[0]?.text || 'Selecciona...';
    
    const trigger = document.createElement('div');
    trigger.className = 'custom-select-trigger is-placeholder';
    trigger.textContent = placeholderText;
    trigger.setAttribute('tabindex', '0');
    
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-select-dropdown';
    
    options.forEach((opt, i) => {
      if (i === 0 && !opt.value) return;
      const item = document.createElement('div');
      item.className = 'custom-select-option';
      item.textContent = opt.text;
      item.dataset.value = opt.value;
      item.addEventListener('click', () => {
        sel.value = opt.value;
        sel.dispatchEvent(new Event('change', { bubbles: true }));
        trigger.textContent = opt.text;
        trigger.classList.remove('is-placeholder');
        dropdown.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('is-selected'));
        item.classList.add('is-selected');
        wrapper.classList.remove('is-open');
      });
      dropdown.appendChild(item);
    });
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.custom-select.is-open').forEach(s => {
        if (s !== wrapper) s.classList.remove('is-open');
      });
      wrapper.classList.toggle('is-open');
    });
    
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });

    sel.style.display = 'none';
    sel.parentNode.insertBefore(wrapper, sel);
    wrapper.appendChild(trigger);
    wrapper.appendChild(dropdown);
    wrapper.appendChild(sel);
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-select.is-open').forEach(s => s.classList.remove('is-open'));
  });
}

// Menú Móvil
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('active');
      const expanded = nav.classList.contains('active');
      btn.setAttribute('aria-expanded', expanded);
    });
  }
}

// Reveal on scroll
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => observer.observe(el));
}

let cocinaActiva = 'latina';
let categoriaActiva = null;
let queryTexto = '';

const aplicaciones = {
  latina: [
    'Desarrollo de tortillas y arepas a escala industrial',
    'Platos preparados para líneas de Food Service',
    'Envasado de marca blanca para cadenas de supermercados'
  ],
  arabe: [
    'Desarrollo de hummus industrial y cremas untables',
    'Mezclas de especias personalizadas (Ras el Hanout, Za\'atar)',
    'Formatos granel (sacos 25kg) para envasadores'
  ],
  asiatica: [
    'Arroz Jazmín y Glutinoso en sacos industriales 20kg',
    'Salsas en bidones 10L / 25L para cocinas centrales',
    'Kits Meal Prep y wok preparados para retail'
  ]
};

const cocinaIcons = {
  latina: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  arabe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  asiatica: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18"/><path d="M18 9a6 6 0 0 0-12 0c0 5 6 9 6 9s6-4 6-9z"/></svg>'
};

const cocinaLabels = { latina: 'Latina', arabe: 'Árabe', asiatica: 'Asiática' };

function initSearch() {
  const input = document.getElementById('cc-search');
  if (!input) return;
  input.addEventListener('input', () => {
    queryTexto = input.value.trim().toLowerCase();
    applySearch();
  });
}

function applySearch() {
  const q = queryTexto;
  const nav = document.getElementById('cc-nav');
  if (!nav) return;

  nav.querySelectorAll('.cc-nav-item').forEach(item => {
    if (!q) {
      item.classList.remove('cc-hidden');
      return;
    }
    const name = (item.dataset.name || '').toLowerCase();
    const micro = (item.dataset.micro || '').toLowerCase();
    item.classList.toggle('cc-hidden', !name.includes(q) && !micro.includes(q));
  });

  renderProducts(cocinaActiva, categoriaActiva, q);
}

function initChips() {}

const isFullCatalog = (window.location.pathname || '').includes('productos');

function renderProducts(cocina, categoriaId, searchQuery) {
  const prodGrid = document.getElementById('cc-products-grid');
  if (!prodGrid) return;
  let prods = productos.filter(p => p.cocina === cocina);
  if (categoriaId) {
    prods = prods.filter(p => p.categoria === categoriaId);
  } else if (!isFullCatalog) {
    prods = prods.slice(0, 6);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    prods = prods.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.etiquetas.some(e => e.toLowerCase().includes(q)) ||
      p.formato.toLowerCase().includes(q)
    );
  }

  updateProdsCount(prods.length);

  if (prods.length === 0) {
    prodGrid.innerHTML = '<p class="cc-no-results">No se encontraron productos.</p>';
    return;
  }

  prodGrid.innerHTML = prods.map(p => `
    <div class="card pcard" data-testid="card-product-${p.id}">
      <div class="card-img pcard-img">
        ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />` : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`}
      </div>
      <div class="card-body">
        <span class="pcard-formato">${p.formato}</span>
        <h4 class="pcard-name">${p.nombre}</h4>
        <div class="pcard-tags">
          ${p.etiquetas.map(e => `<span class="pcard-tag pcard-tag--${p.cocina}">${e}</span>`).join('')}
        </div>
        <a href="${BASE}contacto.html" class="pcard-cta" data-testid="link-ficha-${p.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Solicitar ficha
        </a>
      </div>
    </div>
  `).join('');
}

function renderApps(cocina) {
  const container = document.getElementById('cc-apps-content');
  if (!container) return;
  const apps = aplicaciones[cocina] || [];
  container.innerHTML = apps.map(a =>
    `<div class="app-bullet"><span class="app-dot"></span> ${a}</div>`
  ).join('');
}

function updateProdsCount(count) {
  const counter = document.getElementById('cc-prods-count');
  if (counter) counter.textContent = `${count} producto${count !== 1 ? 's' : ''}`;
}

function updateProdsTitle(catName) {
  const title = document.getElementById('cc-prods-title');
  if (!title) return;
  const header = title.closest('.panel-prods-header');
  if (!header) return;

  if (catName) {
    title.textContent = `Productos — ${catName}`;
    let clearBtn = header.querySelector('.btn-clear-filter');
    if (!clearBtn) {
      clearBtn = document.createElement('button');
      clearBtn.className = 'btn-clear-filter';
      clearBtn.type = 'button';
      clearBtn.textContent = 'Ver todos ×';
      clearBtn.dataset.testid = 'btn-clear-filter';
      clearBtn.addEventListener('click', () => {
        categoriaActiva = null;
        document.querySelectorAll('.cc-nav-item').forEach(i => i.classList.remove('is-active'));
        updateProdsTitle(null);
        renderProducts(cocinaActiva, null, queryTexto || null);
      });
      header.appendChild(clearBtn);
    }
  } else {
    title.textContent = 'Productos Destacados';
    const clearBtn = header.querySelector('.btn-clear-filter');
    if (clearBtn) clearBtn.remove();
  }
}

function openCocina(cocina, skipRender) {
  cocinaActiva = cocina;
  categoriaActiva = null;

  document.querySelectorAll('.cc-nav-group').forEach(g => {
    const isTarget = g.dataset.cocina === cocina;
    g.classList.toggle('is-open', isTarget);
    const header = g.querySelector('.cc-nav-header');
    if (header) header.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
  });
  document.querySelectorAll('.cc-nav-item').forEach(i => i.classList.remove('is-active'));

  if (!skipRender) {
    updateProdsTitle(null);
    renderProducts(cocina, null, queryTexto || null);
    renderApps(cocina);
  }
}

function selectCategory(catId) {
  categoriaActiva = catId;
  document.querySelectorAll('.cc-nav-item').forEach(i => {
    i.classList.toggle('is-active', i.dataset.catid === catId);
  });
  const cat = categorias.find(c => c.id === catId);
  updateProdsTitle(cat ? cat.nombre : null);
  renderProducts(cocinaActiva, catId, queryTexto || null);
}

function initHome() {
  const nav = document.getElementById('cc-nav');
  if (!nav) return;

  const cocinas = ['latina', 'arabe', 'asiatica'];
  const chevronSvg = '<svg class="cc-nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';

  nav.innerHTML = cocinas.map(cocina => {
    const cats = categorias.filter(c => c.cocina === cocina);
    const catCount = productos.filter(p => p.cocina === cocina).length;
    const panelId = `cc-items-${cocina}`;
    return `
      <div class="cc-nav-group" data-cocina="${cocina}" data-testid="nav-group-${cocina}">
        <button class="cc-nav-header" data-testid="nav-header-${cocina}" type="button" aria-expanded="false" aria-controls="${panelId}">
          ${cocinaIcons[cocina]}
          <span class="cc-nav-label">${cocinaLabels[cocina]}</span>
          <span style="font-size:0.7rem; color:var(--muted); font-weight:400;">${catCount}</span>
          ${chevronSvg}
        </button>
        <div class="cc-nav-items" id="${panelId}" role="region" aria-label="${cocinaLabels[cocina]}">
          ${cats.map(c => `
            <button class="cc-nav-item" data-catid="${c.id}" data-cocina="${cocina}" data-name="${c.nombre}" data-micro="${c.micro || ''}" data-testid="nav-item-${c.id}" type="button">
              ${c.nombre}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  nav.querySelectorAll('.cc-nav-header').forEach(header => {
    header.addEventListener('click', () => {
      const cocina = header.closest('.cc-nav-group').dataset.cocina;
      if (cocinaActiva === cocina) return;
      openCocina(cocina);
    });
  });

  nav.querySelectorAll('.cc-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const catId = item.dataset.catid;
      const cocina = item.dataset.cocina;
      if (cocinaActiva !== cocina) openCocina(cocina, true);
      if (categoriaActiva === catId) {
        categoriaActiva = null;
        document.querySelectorAll('.cc-nav-item').forEach(i => i.classList.remove('is-active'));
        updateProdsTitle(null);
        renderProducts(cocina, null, queryTexto || null);
      } else {
        selectCategory(catId);
      }
    });
  });

  const urlCocina = new URLSearchParams(window.location.search).get('cocina');
  const startCocina = (urlCocina && cocinas.includes(urlCocina)) ? urlCocina : 'latina';
  openCocina(startCocina);

}

window.openModal = function() {
  const modal = document.getElementById('ficha-modal');
  if (modal) modal.classList.add('active');
}
window.closeModal = function() {
  const modal = document.getElementById('ficha-modal');
  if (modal) modal.classList.remove('active');
}

// RECETAS
function initRecipes() {
  const urlParams = new URLSearchParams(window.location.search);
  const qCocina = urlParams.get('cocina') || 'todas';
  
  const filterCocina = document.getElementById('filter-receta-cocina');
  const grid = document.getElementById('recipes-grid');
  const chips = document.querySelectorAll('#receta-chips-page .chip');
  
  if (filterCocina) filterCocina.value = qCocina;
  if (chips.length) {
    chips.forEach(c => {
      c.classList.toggle('active', c.dataset.cocina === qCocina);
    });
  }
  
  function render() {
    const sc = filterCocina ? filterCocina.value : 'todas';
    const filtered = sc === 'todas' ? recetas : recetas.filter(r => r.cocina === sc);
    
    grid.innerHTML = filtered.map(r => `
      <a href="${BASE}recetas/receta.html?id=${r.id}" class="receta-card" data-testid="card-receta-${r.id}">
        <div class="receta-card-img">
          <img src="${r.imagen}" alt="${r.titulo}" loading="lazy" />
        </div>
        <div class="receta-card-body">
          <span class="receta-card-badge receta-card-badge--${r.cocina}">${r.cocina}</span>
          <h3>${r.titulo}</h3>
          <p>${r.desc || ''}</p>
          <span class="receta-card-cta">Ver aplicación →</span>
        </div>
      </a>
    `).join('');
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (filterCocina) filterCocina.value = chip.dataset.cocina;
      render();
    });
  });
  
  if (filterCocina) {
    filterCocina.addEventListener('change', () => {
      chips.forEach(c => c.classList.toggle('active', c.dataset.cocina === filterCocina.value));
      render();
    });
  }

  render();
}

function initRecipeDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const container = document.getElementById('recipe-detail');
  if (!id || !container) return;

  const receta = recetas.find(r => r.id === id);
  if (!receta) { container.innerHTML = '<div class="container" style="padding:4rem 0;text-align:center"><h2>Aplicación no encontrada</h2><a href="' + BASE + 'recetas/" class="btn btn-primary" style="margin-top:1rem">Volver a Inspiración</a></div>'; return; }

  const related = recetas.filter(r => r.cocina === receta.cocina && r.id !== receta.id).slice(0, 3);
  const cocinaLabel = { latina: 'Latina', arabe: 'Árabe', asiatica: 'Asiática' }[receta.cocina] || receta.cocina;

  document.title = `${receta.titulo} — Aplicación Industrial | DMONDO`;

  container.innerHTML = `
    <div class="rd-breadcrumb" data-testid="rd-breadcrumb">
      <div class="container">
        <a href="${BASE}recetas/" data-testid="link-back-recetas">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Volver a Inspiración
        </a>
      </div>
    </div>

    <section class="rd-hero" style="background-image: url('${receta.imagen}');" data-testid="rd-hero">
      <div class="rd-hero-overlay"></div>
      <div class="container rd-hero-body">
        <span class="rd-badge rd-badge--${receta.cocina}">${cocinaLabel}</span>
        <h1 data-testid="rd-titulo">${receta.titulo}</h1>
        <p class="rd-hero-desc">${receta.desc}</p>
      </div>
    </section>

    <section class="rd-content">
      <div class="container">
        <div class="rd-ficha">

          <div class="rd-block" data-testid="rd-contexto">
            <div class="rd-block-header">
              <span class="rd-block-num">01</span>
              <div>
                <h2>Contexto Industrial</h2>
                <p class="rd-block-sub">Análisis de mercado y oportunidad</p>
              </div>
            </div>
            <p class="rd-block-text">${receta.contexto}</p>
          </div>

          <div class="rd-block" data-testid="rd-ingredientes">
            <div class="rd-block-header">
              <span class="rd-block-num">02</span>
              <div>
                <h2>Ingredientes DMONDO</h2>
                <p class="rd-block-sub">Materias primas de nuestro catálogo</p>
              </div>
            </div>
            <ul class="rd-ingredients">
              ${receta.ingredientes.map(i => `<li><span class="rd-check">✓</span>${i}</li>`).join('')}
            </ul>
            <a href="${BASE}productos/?cocina=${receta.cocina}" class="rd-link" data-testid="link-ver-ingredientes">Ver ingredientes en catálogo →</a>
          </div>

          <div class="rd-block-row">
            <div class="rd-block rd-block--half" data-testid="rd-canales">
              <div class="rd-block-header">
                <span class="rd-block-num">03</span>
                <div>
                  <h2>Canales</h2>
                  <p class="rd-block-sub">Dónde aplicar este producto</p>
                </div>
              </div>
              <ul class="rd-channels">
                ${receta.canales.map(c => {
                  const [canal, detalle] = c.split(' — ');
                  return `<li><strong>${canal}</strong><span>${detalle}</span></li>`;
                }).join('')}
              </ul>
            </div>

            <div class="rd-block rd-block--half" data-testid="rd-ventajas">
              <div class="rd-block-header">
                <span class="rd-block-num">04</span>
                <div>
                  <h2>Ventajas</h2>
                  <p class="rd-block-sub">Diferenciación competitiva</p>
                </div>
              </div>
              <ul class="rd-advantages">
                ${receta.ventajas.map(v => `<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>${v}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="rd-block-cta">
            <p>¿Quieres desarrollar esta aplicación con ingredientes DMONDO?</p>
            <a href="${BASE}contacto.html" class="btn btn-primary" data-testid="button-contacto-receta">Consultar con nuestro equipo</a>
          </div>

        </div>
      </div>
    </section>

    ${related.length ? `
    <section class="rd-related" data-testid="rd-related">
      <div class="container">
        <h2>Más aplicaciones ${cocinaLabel}s</h2>
        <div class="recetas-grid" style="max-width:100%">
          ${related.map(r => `
            <a href="${BASE}recetas/receta.html?id=${r.id}" class="receta-card" data-testid="card-related-${r.id}">
              <div class="receta-card-img"><img src="${r.imagen}" alt="${r.titulo}" loading="lazy" /></div>
              <div class="receta-card-body">
                <span class="receta-card-badge receta-card-badge--${r.cocina}">${r.cocina}</span>
                <h3>${r.titulo}</h3>
                <p>${r.desc}</p>
                <span class="receta-card-cta">Ver aplicación →</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <section class="section-cta" data-testid="rd-cta-final">
      <div class="container">
        <div class="cta-box">
          <h2>¿Quieres desarrollar ${receta.titulo}?</h2>
          <p class="text-muted">Nuestro equipo de I+D te asesora en la selección de ingredientes, formulación y formatos industriales.</p>
          <div class="cta-actions">
            <a href="${BASE}contacto.html" class="btn btn-primary" data-testid="button-contacto-desarrollo">Hablar con I+D</a>
            <a href="${BASE}productos/" class="btn btn-outline" data-testid="button-catalogo-completo">Ver catálogo completo</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// FORMULARIO DE CONTACTO
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const errorDiv = document.getElementById('form-error');
    const submitBtn = form.querySelector('button[type="submit"]');
    errorDiv.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    const formData = new FormData(form);
    const data = {
      nombre: formData.get('nombre'),
      empresa: formData.get('empresa'),
      email: formData.get('email'),
      tipoNegocio: formData.get('tipoNegocio'),
      interes: formData.get('interes'),
      comentarios: formData.get('comentarios') || null,
    };
    
    try {
      const response = await fetch(BASE + 'api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      } else {
        errorDiv.textContent = result.message || 'Ha ocurrido un error. Por favor, inténtalo de nuevo.';
        errorDiv.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar solicitud';
      }
    } catch (err) {
      errorDiv.textContent = 'Error de conexión. Por favor, inténtalo de nuevo.';
      errorDiv.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar solicitud';
    }
  });
}