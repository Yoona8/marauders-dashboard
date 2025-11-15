const loadButton = document.querySelector('#welcome-button');
const welcomeComponent = document.querySelector('.welcome');
const dashboardComponent = document.querySelector('.dashboard');

loadButton.addEventListener('click', (e) => {
  e.preventDefault();
  const normalizedPath = location.pathname.replace(/\/$/, '');
  history.pushState(null, '', `${normalizedPath}?view=dashboard`);
  welcomeComponent.style.display = 'none';
  dashboardComponent.style.display = 'block';
});