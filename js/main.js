// =========================================================
// Portfolio – Mariano Trod
// =========================================================

// ---------- Cambio de idioma (ES / EN) ----------
const titles = {
  es: 'Mariano Trod | Portfolio',
  en: 'Mariano Trod | Portfolio',
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.title = titles[lang];
  try { localStorage.setItem('lang', lang); } catch (e) { /* sin almacenamiento: no pasa nada */ }
}

document.getElementById('langToggle').addEventListener('click', () => {
  const current = document.documentElement.lang;
  setLanguage(current === 'es' ? 'en' : 'es');
});

// ---------- Menú hamburguesa (móvil) ----------
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});

// Cierra el menú al elegir una sección
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Año actual en el pie ----------
document.getElementById('year').textContent = new Date().getFullYear();
