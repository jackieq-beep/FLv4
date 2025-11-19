document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  const slides = document.querySelectorAll('.hero-slideshow .slide');
  const dots = document.querySelectorAll('.hero-slideshow .dot');
  let current = 0;
  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    current = i;
  }
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      showSlide(idx);
    });
  });
  if (slides.length) {
    setInterval(() => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    }, 5000);
  }
});
