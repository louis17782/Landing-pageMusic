// ...existing code...
// document.addEventListener('DOMContentLoaded', () => {
//   const radioContainer = document.querySelector('.radio-container');
//   const triggerPoint = 800;
//   if (!radioContainer) return;

//   const mq = window.matchMedia('(max-width: 100px)');

//   function update() {
//     // Si estamos en pantallas <= 800px y el scroll pasó el trigger -> esconder con animación
//     if (mq.matches && window.scrollY > triggerPoint) {
//       radioContainer.classList.add('collapsed');
//     } else {
//       radioContainer.classList.remove('collapsed');
//     }
//   }

//   document.addEventListener('scroll', update, { passive: true });
//   window.addEventListener('resize', update);
//   update();
// });
// ...existing code...
document.addEventListener('scroll', () => {
    const radioContainer = document.querySelector('.radio-container');
    const triggerPoint = 800;
  
    if (window.matchMedia('(max-width: 500px)').matches) {
      if (window.scrollY > triggerPoint) {
        radioContainer.style.position = 'static'; 
      } else {
        radioContainer.style.position = 'fixed'; 
        radioContainer.style.bottom = '0'; 
        radioContainer.style.left = '0';
      }
    }
  });
