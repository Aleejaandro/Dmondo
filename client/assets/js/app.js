// DATASET
const categorias = [
  { id: 'harinas', nombre: 'Harinas', cocina: 'latina' },
  { id: 'frijoles', nombre: 'Frijoles', cocina: 'latina' },
  { id: 'conservas-lat', nombre: 'Conservas Latinas', cocina: 'latina' },
  { id: 'especias', nombre: 'Especias', cocina: 'arabe' },
  { id: 'legumbres', nombre: 'Legumbres', cocina: 'arabe' },
  { id: 'conservas-ar', nombre: 'Conservas Árabes', cocina: 'arabe' },
  { id: 'arroces', nombre: 'Arroces Especiales', cocina: 'asiatica' },
  { id: 'salsas', nombre: 'Salsas y Condimentos', cocina: 'asiatica' },
  { id: 'fideos', nombre: 'Fideos', cocina: 'asiatica' }
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

// Tabs (Home)
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!tabBtns.length) return;
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover active
      tabBtns.forEach(b => b.setAttribute('aria-selected', 'false'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      
      // Activar click
      btn.setAttribute('aria-selected', 'true');
      document.getElementById(btn.getAttribute('aria-controls')).classList.add('active');
    });
  });
}

// HOME
function initHome() {
  // Render Categorías y Destacados en Tabs
  const cocinas = ['latina', 'arabe', 'asiatica'];
  
  cocinas.forEach(cocina => {
    const cats = categorias.filter(c => c.cocina === cocina);
    const catGrid = document.getElementById(`grid-cat-${cocina}`);
    if (catGrid) {
      catGrid.innerHTML = cats.map(c => `
        <a href="/productos/index.html?cocina=${cocina}&categoria=${c.id}" class="category-tile">
          ${c.nombre}
        </a>
      `).join('');
    }
    
    const prods = productos.filter(p => p.cocina === cocina).slice(0, 3);
    const prodGrid = document.getElementById(`grid-prod-${cocina}`);
    if (prodGrid) {
      prodGrid.innerHTML = prods.map(p => `
        <div class="card">
          <div class="card-img" style="background: var(--surface); border-bottom: 1px solid var(--border);">
            <span style="font-size: 3rem; opacity: 0.2;">📸</span>
          </div>
          <div class="card-body">
            <span class="badge">${p.formato}</span>
            <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">${p.nombre}</h4>
            <div style="margin-top: auto; padding-top: 1rem;">
              <a href="/contacto.html" class="text-primary font-semibold" style="font-size: 0.9rem;">Solicitar ficha</a>
            </div>
          </div>
        </div>
      `).join('');
    }
  });

  // Render Carrusel Recetas
  const carousel = document.getElementById('home-recetas-carousel');
  if (carousel) {
    carousel.innerHTML = recetas.map(r => `
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