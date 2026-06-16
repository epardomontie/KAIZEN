const toggle = document.getElementById('menuToggle');
const panel = document.getElementById('mobilePanel');

toggle?.addEventListener('click', () => {
  const isOpen = panel.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '✕ Cerrar' : '☰ Menú';
});

panel?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰ Menú';
  });
});
