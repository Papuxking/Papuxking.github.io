# ⚔️ GodotCraft Portfolio

> Portafolio personal de **Kevin Sánchez (Papuxking)** — Game Developer con Godot · Software Engineer · UTA Ecuador

[![Deploy to GitHub Pages](https://github.com/Papuxking/Papuxking.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Papuxking/Papuxking.github.io/actions/workflows/deploy.yml)

---

## 🎮 Demo en vivo

**[papuxking.github.io](https://papuxking.github.io)**

---

## 📂 Estructura del proyecto

```
godotcraft/
├── index.html              ← Portafolio completo (SPA)
├── content/
│   └── projects.json       ← Datos de proyectos (edita aquí para agregar proyectos)
├── assets/
│   ├── sprites/            ← Sprites pixel art (PNG / Aseprite)
│   └── images/             ← Screenshots de proyectos, og-image.png
├── docker/
│   ├── Dockerfile          ← Imagen Nginx para pruebas locales
│   ├── docker-compose.yml  ← Dev server local en puerto 8080
│   └── nginx.conf          ← Config Nginx con headers WASM para Godot
└── .github/
    └── workflows/
        └── deploy.yml      ← CI/CD: push a main → GitHub Pages automático
```

---

## 🚀 Despliegue en GitHub Pages

### Opción A — Automático con GitHub Actions (recomendado)

1. Sube el proyecto a tu repo `Papuxking.github.io` (debe llamarse así exactamente):
   ```bash
   git init
   git remote add origin https://github.com/Papuxking/Papuxking.github.io.git
   git add .
   git commit -m "🎮 chore: init GodotCraft portfolio"
   git push -u origin main
   ```

2. En GitHub → **Settings → Pages**:
   - Source: **GitHub Actions**
   - Guarda los cambios

3. El workflow `.github/workflows/deploy.yml` se activa automáticamente.
   Tu portafolio estará en `https://papuxking.github.io` en ~60 segundos.

### Opción B — Manual (sin Actions)

```bash
# En GitHub → Settings → Pages → Source: Deploy from branch → Branch: main / root
git add . && git commit -m "update" && git push
```

---

## 🛠️ Desarrollo local con Docker

```bash
# Desde la carpeta docker/
cd docker

# Opción 1: docker compose (recomendado, con hot-reload)
docker compose up
# → Abre http://localhost:8080

# Opción 2: build manual
docker build -t godotcraft -f Dockerfile ..
docker run -p 8080:80 godotcraft
```

Sin Docker, también puedes usar Live Server de VS Code o Python:
```bash
python -m http.server 8080
```

---

## ✏️ Cómo personalizar el contenido

### Agregar un proyecto nuevo

Edita `content/projects.json` y agrega un objeto al array:
```json
{
  "id": "mi-juego-godot",
  "featured": true,
  "title": { "es": "Mi Juego en Godot", "en": "My Godot Game" },
  "description": { "es": "Descripción...", "en": "Description..." },
  "tech": ["Godot 4", "GDScript"],
  "emoji": "🗡️",
  "gradient": "linear-gradient(135deg,#2a1a0a,#1a0a2a)",
  "github": "https://github.com/Papuxking/mi-juego",
  "demo": "https://papuxking.github.io/mi-juego/",
  "status": "completed"
}
```

### Cambiar textos del portafolio

Los textos en español e inglés están en el objeto `T` dentro de `<script>` en `index.html`. Busca las claves correspondientes y edita los valores.

### Agregar una exportación web de Godot

1. En Godot 4: **Project → Export → Web → Export Project**
2. Coloca los archivos en `assets/games/nombre-del-juego/`
3. Agrega un `<iframe>` en la sección de proyectos de `index.html`:
   ```html
   <iframe src="assets/games/nombre-del-juego/index.html"
           width="640" height="400"
           allow="autoplay; fullscreen"
           loading="lazy">
   </iframe>
   ```
   > ⚠️ Godot 4 requiere los headers `COOP/COEP` para SharedArrayBuffer. Ya están configurados en `docker/nginx.conf`. Para GitHub Pages, necesitas el workaround con Service Worker (ver más abajo).

### Headers WASM en GitHub Pages

GitHub Pages no permite headers personalizados. Usa este workaround:
1. Instala `coi-serviceworker`: descarga `coi-serviceworker.min.js` y ponlo en la raíz
2. Agrega en `<head>` de `index.html`:
   ```html
   <script src="coi-serviceworker.min.js"></script>
   ```

---

## 📬 Configurar el formulario de contacto (Formspree)

1. Ve a [formspree.io](https://formspree.io) y crea una cuenta gratuita
2. Crea un nuevo formulario → copia tu ID (ej: `xabcdefg`)
3. En `index.html`, busca `XXXXXXXX` y reemplázalo:
   ```html
   <form action="https://formspree.io/f/xabcdefg" ...>
   ```

---

## 🎨 Paleta de colores

| Variable       | Valor     | Uso                        |
|---------------|-----------|---------------------------|
| `--bg`        | `#070714` | Fondo principal            |
| `--purple`    | `#7c3aed` | Color primario (Godot!)    |
| `--cyan`      | `#00d4ff` | Acento interactivo         |
| `--gold`      | `#ffd700` | Highlights / estrellas     |
| `--text`      | `#e8e8ff` | Texto principal            |
| `--muted`     | `#7878aa` | Texto secundario           |

---

## 📦 Dependencias externas (CDN, sin npm)

| Librería             | Versión   | Uso                          |
|---------------------|-----------|------------------------------|
| Press Start 2P      | Google Fonts | Tipografía pixel art (títulos) |
| VT323               | Google Fonts | Tipografía retro (subtítulos)  |
| Rajdhani            | Google Fonts | Tipografía body (legibilidad)  |
| Canvas API nativa   | —         | Sprite interactivo + mini-demo |
| GitHub REST API v3  | —         | Stats en tiempo real           |
| Formspree           | —         | Formulario de contacto         |

> **Sin npm, sin build step, sin node_modules.** El portafolio es un solo archivo HTML auto-contenido, listo para GitHub Pages.

---

## 🔮 Próximas mejoras (roadmap)

- [ ] Sección Blog con posts Markdown cargados dinámicamente
- [ ] Integración de exportaciones web de proyectos Godot
- [ ] Modo claro / oscuro con toggle
- [ ] GitHub stats más detallados (commits totales, contribuciones)
- [ ] PWA (manifest.json + Service Worker para offline)
- [ ] Animación de carga (loading screen pixel art)
- [ ] Página 404 personalizada con mini-juego

---

## 📄 Licencia

MIT — Siéntete libre de usar este portafolio como base y adaptarlo a tu identidad.

---

*Hecho con 💜 y GDScript por Kevin Sánchez — [@Papuxking](https://github.com/Papuxking)*
