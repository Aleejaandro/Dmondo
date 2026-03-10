# DMONDO — Web corporativa B2B

Sitio web estático del **catálogo étnico B2B** de DMONDO (Grupo José Abril / ABM Crops). Presenta ingredientes de cocina latina, árabe y asiática para retail, distribución y HORECA.

## Contenido

- **Inicio** — Hero, líneas de cocina, capacidades B2B, calidad, inspiración y CTA.
- **Catálogo B2B** — Explorador de productos por cocina y categoría, con búsqueda y enlace a contacto.
- **Inspiración** — Aplicaciones y recetas industriales (arepas, hummus, pad thai, etc.) con fichas detalladas.
- **Calidad** — Estándares, certificaciones y documentación técnica.
- **Contacto** — Formulario B2B para solicitar catálogo e información comercial.

## Tecnologías

- **HTML5** — Páginas semánticas y accesibles.
- **CSS3** — Estilos en `css/styles.css` (variables, grid, responsive).
- **JavaScript (ES6+)** — Lógica en `js/app.js`: menú móvil, explorador de productos, filtros de recetas, formulario de contacto.

Sin frameworks ni proceso de build. Solo archivos estáticos.

## Estructura del proyecto

```
├── index.html          # Página principal
├── calidad.html        # Calidad y certificaciones
├── contacto.html       # Formulario de contacto
├── css/
│   └── styles.css      # Estilos globales
├── js/
│   └── app.js          # Lógica de la web
├── assets/
│   ├── logos/          # Logo
│   └── img/
│       ├── home_img/   # Hero, cocinas, inspiración
│       ├── products_img/# Imágenes de productos
│       └── recetas_img/# Imágenes de recetas
├── productos/
│   └── index.html      # Catálogo B2B
├── recetas/
│   ├── index.html      # Listado de aplicaciones
│   └── receta.html     # Detalle de aplicación (con ?id=)
└── cocinas/            # Redirecciones al catálogo
    ├── index.html
    ├── arabe.html
    ├── asiatica.html
    └── latina.html
```

## Cómo ver la web en local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/dmondo-beta.git
   cd dmondo-beta
   ```

2. **Abrir con un servidor local** (recomendado para que rutas y enlaces funcionen bien)
   - Con **Python 3**: `python -m http.server 8000` y abrir `http://localhost:8000`
   - Con **Node.js** (npx): `npx serve` y abrir la URL que indique
   - Con **VS Code**: extensión "Live Server" y "Open with Live Server" en `index.html`

3. **O abrir directamente**  
   Abrir `index.html` en el navegador. Puede haber limitaciones con rutas o módulos JS según el navegador.

## Despliegue

La web es estática. Puedes subirla a:

- **GitHub Pages** — Activar en el repo: *Settings → Pages → Source: main branch* (carpeta raíz o `/docs` si lo usas).
- Cualquier hosting de archivos estáticos (Netlify, Vercel, etc.): apuntar la raíz del sitio a la raíz del proyecto.

## Licencia

Proyecto privado. © DMONDO / Grupo José Abril. Todos los derechos reservados.
