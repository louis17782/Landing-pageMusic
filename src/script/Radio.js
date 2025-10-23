// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const radioContainer = document.querySelector('.radio-container');
  const triggerPoint = 800;
  if (!radioContainer) return;

  const mq = window.matchMedia('(max-width: 800px)');

  function update() {
    // Si estamos en pantallas <= 800px y el scroll pasó el trigger -> esconder con animación
    if (mq.matches && window.scrollY > triggerPoint) {
      radioContainer.classList.add('collapsed');
    } else {
      radioContainer.classList.remove('collapsed');
    }
  }

  document.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
// ...existing code...
