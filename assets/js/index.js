// Inicializar AOS
AOS.init({
  once: true
});

// Mouse position para radial gradient
document.addEventListener('mousemove', (e) => {
  const x = `${e.clientX}px`;
  const y = `${e.clientY}px`;
  document.body.style.setProperty('--x', x);
  document.body.style.setProperty('--y', y);
});