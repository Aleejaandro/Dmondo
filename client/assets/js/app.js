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

const productos = [
  { id: 'p1', nombre: 'Harina de Maíz Precocida', cocina: 'latina', categoria: 'harinas', formato: '25kg', etiquetas: ['sin gluten', 'granel'], imagen: '/assets/img/products/p1-harina-maiz.png' },
  { id: 'p2', nombre: 'Frijol Negro', cocina: 'latina', categoria: 'frijoles', formato: '10kg / 25kg', etiquetas: ['natural', 'horeca'], imagen: '/assets/img/products/p2-frijol-negro.png' },
  { id: 'p3', nombre: 'Ají Amarillo Pasta', cocina: 'latina', categoria: 'conservas-lat', formato: 'Cubo 3kg', etiquetas: ['horeca'], imagen: '/assets/img/products/p3-aji-amarillo.png' },
  { id: 'p4', nombre: 'Frijol Rojo', cocina: 'latina', categoria: 'frijoles', formato: '10kg', etiquetas: ['natural'], imagen: '/assets/img/products/p4-frijol-rojo.png' },
  { id: 'p5', nombre: 'Ras el Hanout', cocina: 'arabe', categoria: 'especias', formato: '1kg / 5kg', etiquetas: ['mezcla', 'horeca'], imagen: '/assets/img/products/p5-ras-el-hanout.png' },
  { id: 'p6', nombre: 'Garbanzo Pedrosillano', cocina: 'arabe', categoria: 'legumbres', formato: '25kg', etiquetas: ['natural', 'granel'], imagen: '/assets/img/products/p6-garbanzo.png' },
  { id: 'p7', nombre: 'Pasta de Sésamo (Tahini)', cocina: 'arabe', categoria: 'conservas-ar', formato: 'Cubo 5kg', etiquetas: ['horeca', 'vegan'], imagen: '/assets/img/products/p7-tahini.png' },
  { id: 'p8', nombre: 'Comino Molido', cocina: 'arabe', categoria: 'especias', formato: '5kg', etiquetas: ['puro'], imagen: '/assets/img/products/p8-comino.png' },
  { id: 'p9', nombre: 'Arroz Jazmín', cocina: 'asiatica', categoria: 'arroces', formato: '20kg', etiquetas: ['premium', 'granel'], imagen: '/assets/img/products/p9-arroz-jazmin.png' },
  { id: 'p10', nombre: 'Salsa de Soja Oscura', cocina: 'asiatica', categoria: 'salsas', formato: 'Garrafa 10L', etiquetas: ['horeca', 'fermentado'], imagen: '/assets/img/products/p10-salsa-soja.png' },
  { id: 'p11', nombre: 'Fideos de Arroz', cocina: 'asiatica', categoria: 'fideos', formato: 'Caja 5kg', etiquetas: ['sin gluten', 'horeca'], imagen: '/assets/img/products/p11-fideos-arroz.png' },
  { id: 'p12', nombre: 'Arroz Glutinoso', cocina: 'asiatica', categoria: 'arroces', formato: '20kg', etiquetas: ['premium'], imagen: '/assets/img/products/p12-arroz-glutinoso.png' }
];

const recetas = [
  { id: 'r1', titulo: 'Arepas Industriales', cocina: 'latina', imagen: 'bg-primary' },
  { id: 'r2', titulo: 'Hummus de Garbanzo', cocina: 'arabe', imagen: 'bg-accent' },
  { id: 'r3', titulo: 'Pad Thai Auténtico', cocina: 'asiatica', imagen: 'bg-success' },
  { id: 'r4', titulo: 'Feijoada Base', cocina: 'latina', imagen: 'bg-primaryHover' },
  { id: 'r5', titulo: 'Falafel Tradicional', cocina: 'arabe', imagen: 'bg-accent' },
  { id: 'r6', titulo: 'Arroz Frito Yangchow', cocina: 'asiatica', imagen: 'bg-success' },
  { id: 'r7', titulo: 'Tacos Al Pastor', cocina: 'latina', imagen: 'bg-danger' },
  { id: 'r8', titulo: 'Shawarma', cocina: 'arabe', imagen: 'bg-ink' },
  { id: 'r9', titulo: 'Ramen Tonkotsu', cocina: 'asiatica', imagen: 'bg-muted' }
];

// FUNCIONES CORE
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initReveal();
  initSearch();
  initChips();
  
  if (document.getElementById('cc-nav')) initHome();
  if (document.getElementById('catalog-grid')) initCatalog();
  if (document.getElementById('recipes-grid')) initRecipes();
  if (document.getElementById('recipe-detail')) initRecipeDetail();
  if (document.getElementById('contact-form')) initContactForm();
});

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

// Chip filters for inspiration carousel
function initChips() {
  const chips = document.querySelectorAll('#receta-chips .chip');
  if (!chips.length) return;

  function renderCarousel(cocina) {
    const carousel = document.getElementById('home-recetas-carousel');
    if (!carousel) return;
    const filtered = cocina === 'todas' ? recetas : recetas.filter(r => r.cocina === cocina);
    carousel.innerHTML = filtered.map(r => `
      <div class="card" data-testid="card-receta-${r.id}">
        <div class="card-img">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div class="card-body">
          <span class="badge" style="text-transform: capitalize;">${r.cocina}</span>
          <h4 style="margin-bottom: 0.5rem;">${r.titulo}</h4>
          <a href="/recetas/receta.html?id=${r.id}" style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-top:auto;">Ver aplicación →</a>
        </div>
      </div>
    `).join('');
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderCarousel(chip.dataset.cocina);
    });
  });
}

function renderProducts(cocina, categoriaId, searchQuery) {
  const prodGrid = document.getElementById('cc-products-grid');
  if (!prodGrid) return;
  let prods = productos.filter(p => p.cocina === cocina);
  if (categoriaId) {
    prods = prods.filter(p => p.categoria === categoriaId);
  } else {
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

  if (prods.length === 0) {
    prodGrid.innerHTML = '<p class="cc-no-results">No se encontraron productos.</p>';
    return;
  }

  prodGrid.innerHTML = prods.map(p => `
    <div class="card" data-testid="card-product-${p.id}">
      <div class="card-img">
        ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />` : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`}
      </div>
      <div class="card-body">
        <span class="badge">${p.formato}</span>
        <h4 style="margin-bottom: 0.35rem;">${p.nombre}</h4>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom: 0.75rem;">
          ${p.etiquetas.map(e => `<span style="font-size:0.75rem; background:var(--bg); padding:0.15rem 0.5rem; border-radius:4px; color:var(--muted);">${e}</span>`).join('')}
        </div>
        <a href="/contacto.html" style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-top:auto;" data-testid="link-ficha-${p.id}">Solicitar ficha →</a>
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
              <span class="cc-nav-micro">${(c.micro || '').split(',')[0]}</span>
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

  const carousel = document.getElementById('home-recetas-carousel');
  if (carousel) {
    carousel.innerHTML = recetas.map(r => `
      <div class="card" data-testid="card-receta-${r.id}">
        <div class="card-img">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div class="card-body">
          <span class="badge" style="text-transform: capitalize;">${r.cocina}</span>
          <h4 style="margin-bottom: 0.5rem;">${r.titulo}</h4>
          <a href="/recetas/receta.html?id=${r.id}" style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-top:auto;">Ver aplicación →</a>
        </div>
      </div>
    `).join('');
  }
}

// CATÁLOGO B2B
function initCatalog() {
  const urlParams = new URLSearchParams(window.location.search);
  const qCocina = urlParams.get('cocina') || 'todas';
  const qCat = urlParams.get('categoria') || '';

  const filterCocina = document.getElementById('filter-cocina');
  const filterCat = document.getElementById('filter-categoria');
  const searchInput = document.getElementById('search-prod');
  const grid = document.getElementById('catalog-grid');
  
  if (filterCocina) filterCocina.value = qCocina;
  
  function updateCatOptions() {
    const selectedCocina = filterCocina.value;
    let cats = categorias;
    if (selectedCocina !== 'todas') {
      cats = categorias.filter(c => c.cocina === selectedCocina);
    }
    
    filterCat.innerHTML = '<option value="">Todas las categorías</option>' + 
      cats.map(c => `<option value="${c.id}" ${c.id === qCat ? 'selected' : ''}>${c.nombre}</option>`).join('');
  }
  
  function renderProducts() {
    const sc = filterCocina.value;
    const sCat = filterCat.value;
    const term = searchInput.value.toLowerCase();
    
    const filtered = productos.filter(p => {
      const matchCocina = sc === 'todas' || p.cocina === sc;
      const matchCat = sCat === '' || p.categoria === sCat;
      const matchSearch = p.nombre.toLowerCase().includes(term);
      return matchCocina && matchCat && matchSearch;
    });
    
    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 2rem;" class="text-muted">No se encontraron productos.</div>';
      return;
    }
    
    grid.innerHTML = filtered.map(p => `
      <div class="card">
        <div class="card-img">
          ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />` : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`}
        </div>
        <div class="card-body">
          <div style="display:flex; justify-content:space-between; margin-bottom: 1rem;">
            <span class="badge" style="margin:0">${p.formato}</span>
            <span class="text-muted" style="font-size: 0.8rem; text-transform: capitalize;">${p.cocina}</span>
          </div>
          <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">${p.nombre}</h4>
          <div style="display:flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
            ${p.etiquetas.map(e => `<span style="font-size:0.75rem; background: var(--bg); padding: 0.15rem 0.5rem; border-radius: 4px;">${e}</span>`).join('')}
          </div>
          <button onclick="openModal()" class="btn btn-outline" style="width:100%; padding: 0.5rem; margin-top: auto;">Solicitar Ficha Técnica</button>
        </div>
      </div>
    `).join('');
  }

  if (filterCocina) {
    updateCatOptions();
    renderProducts();
    
    filterCocina.addEventListener('change', () => {
      updateCatOptions();
      renderProducts();
    });
    filterCat.addEventListener('change', renderProducts);
    searchInput.addEventListener('input', renderProducts);
  }
}

window.openModal = function() {
  document.getElementById('ficha-modal').classList.add('active');
}
window.closeModal = function() {
  document.getElementById('ficha-modal').classList.remove('active');
}

// RECETAS
function initRecipes() {
  const urlParams = new URLSearchParams(window.location.search);
  const qCocina = urlParams.get('cocina') || 'todas';
  
  const filterCocina = document.getElementById('filter-receta-cocina');
  const grid = document.getElementById('recipes-grid');
  
  if (filterCocina) filterCocina.value = qCocina;
  
  function render() {
    const sc = filterCocina.value;
    const filtered = sc === 'todas' ? recetas : recetas.filter(r => r.cocina === sc);
    
    grid.innerHTML = filtered.map(r => `
      <div class="card">
        <div class="card-img" style="background: var(--surface);">
            <span style="font-size: 3rem; opacity: 0.2;">🍲</span>
        </div>
        <div class="card-body">
          <span class="badge">${r.cocina}</span>
          <h4 style="margin-bottom: 0.5rem;">${r.titulo}</h4>
          <a href="/recetas/receta.html?id=${r.id}" class="text-primary font-semibold" style="font-size: 0.9rem; margin-top: auto;">Ver aplicación</a>
        </div>
      </div>
    `).join('');
  }
  
  if (filterCocina) {
    render();
    filterCocina.addEventListener('change', render);
  }
}

// DETALLE RECETA
function initRecipeDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  if (id) {
    const receta = recetas.find(r => r.id === id);
    if (receta) {
      document.getElementById('receta-titulo').textContent = receta.titulo;
      document.getElementById('receta-cocina').textContent = receta.cocina;
    }
  }
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
      const response = await fetch('/api/contact', {
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