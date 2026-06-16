const MENU_DATA = [
  {
    category: 'desayunos',
    title: 'Desayunos',
    subtitle: 'Chilaquiles y huevos',
    items: [
      { name: 'Chilaquiles sencillos', desc: 'Totopos bañados en salsa (verde o roja), crema, queso y cebolla.', price: '$50.00' },
      { name: 'Chilaquiles con huevo', desc: 'Totopos bañados en salsa (verde o roja) con huevo estrellado, crema y queso.', price: '$60.00' },
      { name: 'Chilaquiles con pollo deshebrado', desc: 'Totopos bañados en salsa (verde o roja) con pollo deshebrado, crema y queso.', price: '$70.00' }
    ]
  },
  {
    category: 'antojitos',
    title: 'Antojitos Mexicanos',
    subtitle: 'Tradición al momento',
    items: [
      { name: 'Pambazo sencillo', desc: '', price: '$30.00' },
      { name: 'Quesadilla', desc: '', price: '$25.00' },
      { name: 'Quesadillas con queso', desc: '', price: '$30.00' },
      { name: 'Pambazo clásico', desc: '', price: '$30.00' },
      { name: 'Gordita clásica', desc: '', price: '$30.00' },
      { name: 'Sopes clásico', desc: '', price: '$30.00' },
      { name: 'Sope con bistec', desc: '', price: '$70.00' },
      { name: 'Huarche sencillo', desc: '', price: '$50.00' },
      { name: 'Huarache con nopales', desc: '', price: '$60.00' }
    ]
  },
  {
    category: 'carnes',
    title: 'Carnes y Pollo',
    subtitle: 'Platos fuertes',
    items: [
      { name: 'Huevos a la mexicana', desc: '', price: '$55.00' },
      { name: 'Huevitos divorciados', desc: '', price: '$55.00' },
      { name: 'Pechuga asada con ensalada', desc: '', price: '$70.00' },
      { name: 'Pechuga asada con papas', desc: '', price: '$80.00' }
    ]
  },
  {
    category: 'tortas',
    title: 'Tortas y Burritos',
    subtitle: 'Grandes y generosos',
    items: [
      { name: 'Torta salchicha', desc: '', price: '$50.00' },
      { name: 'Torta jamón', desc: '', price: '$50.00' },
      { name: 'Torta milanesa de res', desc: '', price: '$70.00' },
      { name: 'Torta pechuga asada', desc: '', price: '$80.00' },
      { name: 'Burrito Igor', desc: 'Jamón, queso Oaxaca y frijol', price: '$50.00' },
      { name: 'Burrito Politécnico', desc: 'Pechuga, queso Oaxaca y frijol', price: '$80.00' }
    ]
  },
  {
    category: 'hamburguesas',
    title: 'Hamburguesas y Snacks',
    subtitle: 'Para antojo rápido',
    items: [
      { name: 'Hamburguesa clásica', desc: '', price: '$65.00' },
      { name: 'Hamburguesa Ranch Burger', desc: 'Longaniza, Oaxaca y americano', price: '$90.00' },
      { name: 'Doble Burger', desc: 'Doble carne, Oaxaca y americano', price: '$120.00' },
      { name: 'Hot-Dog sencillo', desc: '3 piezas', price: '$60.00' },
      { name: 'Hot-Dog especial', desc: '3 piezas con queso Oaxaca y tocino', price: '$90.00' }
    ]
  },
  {
    category: 'cafeteria',
    title: 'Cafetería',
    subtitle: 'Café y frapés',
    items: [
      { name: 'Americano', desc: '', price: '$25.00' },
      { name: 'Cappuccino', desc: '', price: '$35.00' },
      { name: 'Latte macciato', desc: '', price: '$35.00' },
      { name: 'Espresso', desc: '', price: '$25.00' },
      { name: 'Mocha', desc: '', price: '$35.00' },
      { name: 'Chocolatl', desc: '', price: '$35.00' },
      { name: 'Frappe de Oreo', desc: '', price: '$60.00' },
      { name: 'Smoothie sencillo', desc: 'Mango, manzana, naranja, uva, fresa, limón, jamaica, tamarindo, piña o durazno.', price: '$50.00' }
    ]
  },
  {
    category: 'bebidas',
    title: 'Bebidas Frías',
    subtitle: 'Para refrescarte',
    items: [
      { name: 'Refresco de lata', desc: '', price: '$50.00' },
      { name: 'Refresco de vidrio', desc: '', price: '$15.00' },
      { name: 'Agua del día 1L', desc: '', price: '$30.00' },
      { name: 'Porción extra de perlas', desc: '', price: '$15.00' }
    ]
  },
  {
    category: 'postres',
    title: 'Postres',
    subtitle: 'Cierre perfecto',
    items: [
      { name: 'Flan napolitano', desc: '', price: '$45.00' },
      { name: 'Cheesecake de zarzamora', desc: '', price: '$45.00' },
      { name: 'Cheesecake de chispas', desc: '', price: '$45.00' },
      { name: 'Pastel de zanahoria', desc: '', price: '$45.00' },
      { name: 'Pastel Matilda', desc: '', price: '$55.00' }
    ]
  }
];

const menuGrid = document.getElementById('menuGrid');
const menuStatus = document.getElementById('menuStatus');
const menuButtons = document.querySelectorAll('[data-filter]');
const categoryCards = document.querySelectorAll('.category-card');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

function renderMenu(filter = 'all') {
  const sections = filter === 'all'
    ? MENU_DATA
    : MENU_DATA.filter(section => section.category === filter);

  menuGrid.innerHTML = sections.map(section => `
    <article class="menu-card" data-category="${section.category}">
      <div class="menu-card-head">
        <div>
          <h3>${section.title}</h3>
          <small>${section.subtitle}</small>
        </div>
      </div>
      <div class="menu-list">
        ${section.items.map(item => `
          <div class="menu-item">
            <div class="meta">
              <strong>${item.name}</strong>
              ${item.desc ? `<small>${item.desc}</small>` : ''}
            </div>
            <div class="price">${item.price}</div>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');

  menuStatus.textContent = filter === 'all'
    ? 'Mostrando: todos los artículos'
    : `Mostrando: ${sections[0].title}`;

  categoryCards.forEach(card => {
    card.classList.toggle('active', card.dataset.filter === filter || (filter === 'all' && card.dataset.filter === 'desayunos'));
  });

  menuButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

function setFilter(filter) {
  renderMenu(filter);
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

categoryCards.forEach(card => {
  card.addEventListener('click', () => setFilter(card.dataset.filter));
});

menuButton?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

renderMenu('all');
