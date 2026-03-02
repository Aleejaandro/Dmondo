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
  // Latina
  { id: 'p1', nombre: 'Harina de Maíz Precocida', cocina: 'latina', categoria: 'harinas', formato: '25kg', etiquetas: ['sin gluten', 'granel'] },
  { id: 'p2', nombre: 'Frijol Negro', cocina: 'latina', categoria: 'frijoles', formato: '10kg / 25kg', etiquetas: ['natural', 'horeca'] },
  { id: 'p3', nombre: 'Ají Amarillo Pasta', cocina: 'latina', categoria: 'conservas-lat', formato: 'Cubo 3kg', etiquetas: ['horeca'] },
  { id: 'p4', nombre: 'Frijol Rojo', cocina: 'latina', categoria: 'frijoles', formato: '10kg', etiquetas: ['natural'] },
  // Arabe
  { id: 'p5', nombre: 'Ras el Hanout', cocina: 'arabe', categoria: 'especias', formato: '1kg / 5kg', etiquetas: ['mezcla', 'horeca'] },
  { id: 'p6', nombre: 'Garbanzo Pedrosillano', cocina: 'arabe', categoria: 'legumbres', formato: '25kg', etiquetas: ['natural', 'granel'] },
  { id: 'p7', nombre: 'Pasta de Sésamo (Tahini)', cocina: 'arabe', categoria: 'conservas-ar', formato: 'Cubo 5kg', etiquetas: ['horeca', 'vegan'] },
  { id: 'p8', nombre: 'Comino Molido', cocina: 'arabe', categoria: 'especias', formato: '5kg', etiquetas: ['puro'] },
  // Asiatica
  { id: 'p9', nombre: 'Arroz Jazmín', cocina: 'asiatica', categoria: 'arroces', formato: '20kg', etiquetas: ['premium', 'granel'] },
  { id: 'p10', nombre: 'Salsa de Soja Oscura', cocina: 'asiatica', categoria: 'salsas', formato: 'Garrafa 10L', etiquetas: ['horeca', 'fermentado'] },
  { id: 'p11', nombre: 'Fideos de Arroz', cocina: 'asiatica', categoria: 'fideos', formato: 'Caja 5kg', etiquetas: ['sin gluten', 'horeca'] },
  { id: 'p12', nombre: 'Arroz Glutinoso', cocina: 'asiatica', categoria: 'arroces', formato: '20kg', etiquetas: ['premium'] }
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
  initTabs();
  initChips();
  
  // Rutas especificas
  if (document.getElementById('grid-cat-latina')) initHome();
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

// Tabs (Home) with keyboard navigation + category reset
const activeCategoryByCocina = {};

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!tabBtns.length) return;

  const cocinaLabels = { latina: 'Cocina Latina', arabe: 'Cocina Árabe', asiatica: 'Cocina Asiática' };

  function updateCtaCocina(btn) {
    const ctaBtn = document.getElementById('cta-cocina');
    if (!ctaBtn) return;
    const cocina = btn.dataset.cocina || 'latina';
    const label = cocinaLabels[cocina] || 'Cocina Latina';
    ctaBtn.textContent = `Solicitar catálogo de ${label}`;
    ctaBtn.href = `/contacto.html#catalogo?cocina=${cocina}`;
  }

  function activateTab(btn) {
    tabBtns.forEach(b => { b.setAttribute('aria-selected', 'false'); b.setAttribute('tabindex', '-1'); });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
    btn.focus();
    document.getElementById(btn.getAttribute('aria-controls')).classList.add('active');
    updateCtaCocina(btn);
    const cocina = btn.dataset.cocina || 'latina';
    clearCategoryFilter(cocina);
  }

  tabBtns.forEach((btn, i) => {
    btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    btn.addEventListener('click', () => activateTab(btn));
    btn.addEventListener('keydown', (e) => {
      const tabs = Array.from(tabBtns);
      let idx = tabs.indexOf(btn);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); activateTab(tabs[(idx + 1) % tabs.length]); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); activateTab(tabs[(idx - 1 + tabs.length) % tabs.length]); }
      if (e.key === 'Home') { e.preventDefault(); activateTab(tabs[0]); }
      if (e.key === 'End') { e.preventDefault(); activateTab(tabs[tabs.length - 1]); }
    });
  });
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

// Category filter helpers
function renderProducts(cocina, categoriaId) {
  const prodGrid = document.getElementById(`grid-prod-${cocina}`);
  if (!prodGrid) return;
  let prods = productos.filter(p => p.cocina === cocina);
  if (categoriaId) {
    prods = prods.filter(p => p.categoria === categoriaId);
  } else {
    prods = prods.slice(0, 6);
  }

  if (prods.length === 0) {
    prodGrid.innerHTML = '<p class="text-muted" style="padding:1rem; text-align:center; grid-column:1/-1;">No hay productos en esta categoría.</p>';
    return;
  }

  prodGrid.innerHTML = prods.map(p => `
    <div class="card" data-testid="card-product-${p.id}">
      <div class="card-img">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
      <div class="card-body">
        <span class="badge">${p.formato}</span>
        <h4 style="margin-bottom: 0.35rem;">${p.nombre}</h4>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom: 0.75rem;">
          ${p.etiquetas.map(e => `<span style="font-size:0.75rem; background:var(--bg); padding:0.15rem 0.5rem; border-radius:4px; color:var(--muted);">${e}</span>`).join('')}
        </div>
        <a href="/contacto.html" style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-top:auto;">Solicitar ficha →</a>
      </div>
    </div>
  `).join('');
}

function updateProdsTitle(cocina, catName) {
  const title = document.getElementById(`prods-title-${cocina}`);
  if (!title) return;
  const header = title.closest('.panel-prods-header');

  if (catName) {
    title.textContent = `Productos en ${catName}`;
    let clearBtn = header.querySelector('.btn-clear-filter');
    if (!clearBtn) {
      clearBtn = document.createElement('button');
      clearBtn.className = 'btn-clear-filter';
      clearBtn.textContent = 'Limpiar filtro ×';
      clearBtn.dataset.testid = `btn-clear-${cocina}`;
      clearBtn.addEventListener('click', () => clearCategoryFilter(cocina));
      header.appendChild(clearBtn);
    }
  } else {
    title.textContent = 'Productos Destacados';
    const clearBtn = header.querySelector('.btn-clear-filter');
    if (clearBtn) clearBtn.remove();
  }
}

function selectCategory(cocina, catId) {
  activeCategoryByCocina[cocina] = catId;
  const catGrid = document.getElementById(`grid-cat-${cocina}`);
  if (catGrid) {
    catGrid.querySelectorAll('.category-tile').forEach(t => {
      t.classList.toggle('is-active', t.dataset.catid === catId);
    });
  }
  const cat = categorias.find(c => c.id === catId);
  updateProdsTitle(cocina, cat ? cat.nombre : null);
  renderProducts(cocina, catId);
}

function clearCategoryFilter(cocina) {
  activeCategoryByCocina[cocina] = null;
  const catGrid = document.getElementById(`grid-cat-${cocina}`);
  if (catGrid) {
    catGrid.querySelectorAll('.category-tile').forEach(t => t.classList.remove('is-active'));
  }
  updateProdsTitle(cocina, null);
  renderProducts(cocina, null);
}

// HOME
function initHome() {
  const cocinas = ['latina', 'arabe', 'asiatica'];

  const catIcons = {
    harinas: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    frijoles: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
    'conservas-lat': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    especias: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    legumbres: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>',
    'conservas-ar': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>',
    arroces: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M12 3v18"/><path d="M18 9a6 6 0 0 0-12 0c0 5 6 9 6 9s6-4 6-9z"/></svg>',
    salsas: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M8 2h8l4 10H4L8 2z"/><path d="M4 12v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6"/></svg>',
    fideos: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  };

  cocinas.forEach(cocina => {
    const cats = categorias.filter(c => c.cocina === cocina);
    const catGrid = document.getElementById(`grid-cat-${cocina}`);
    if (catGrid) {
      catGrid.innerHTML = cats.map(c => `
        <button type="button" class="category-tile" data-catid="${c.id}" data-cocina="${cocina}" data-testid="tile-${c.id}">
          <span class="tile-icon">${catIcons[c.id] || ''}</span>
          <span class="tile-name">${c.nombre}</span>
          <span class="tile-micro">${c.micro || ''}</span>
          <span class="tile-arrow">Ver productos →</span>
        </button>
      `).join('');

      catGrid.querySelectorAll('.category-tile').forEach(tile => {
        tile.addEventListener('click', () => {
          const catId = tile.dataset.catid;
          if (activeCategoryByCocina[cocina] === catId) {
            clearCategoryFilter(cocina);
          } else {
            selectCategory(cocina, catId);
          }
        });
      });
    }

    renderProducts(cocina, null);
  });

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