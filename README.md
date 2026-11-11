# Portfolio – Mariano Trod

CV / Portfolio digital personal. Trabajo práctico de **Desarrollo Tecnológico 2** (UNRaf).

Sitio estático hecho con **HTML, CSS y JavaScript**, bilingüe (español / inglés) y responsive.

## Estructura

```
index.html      Contenido del sitio (cada texto está en ES y EN)
css/styles.css  Estilos (colores y fuentes en las variables de :root)
js/main.js      Cambio de idioma y menú móvil
img/            Foto de perfil y capturas de los juegos (opcional)
```

## Cómo editar

- **Textos:** en `index.html` cada texto aparece dos veces, uno con `data-lang="es"` y otro con `data-lang="en"`.
- **Colores y estilo:** en `css/styles.css`, variables de `:root`. Para un estilo más clásico, cambiar
  `--font-display` por `var(--font-body)` y `--pixel-shadow` por `none`.
- **Foto:** guardar `img/perfil.jpg` y reemplazar el `<div class="avatar">` por
  `<img src="img/perfil.jpg" alt="Mariano Trod" class="avatar">`.
- **Capturas de los juegos:** reemplazar cada `<div class="card__media ...">` por
  `<img src="img/nombre.png" alt="Nombre del juego" class="card__media">`.

## Publicación (GitHub Pages)

1. Crear un repositorio en GitHub (por ejemplo `Portfolio`).
2. Subir los archivos:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/marianotrod/Portfolio.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. A los minutos el sitio queda en `https://marianotrod.github.io/Portfolio/`.
