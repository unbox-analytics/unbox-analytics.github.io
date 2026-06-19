// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navCenter = document.querySelector('.nav-center');
  if (navToggle && navCenter) {
    navToggle.addEventListener('click', () => navCenter.classList.toggle('open'));
  }

  // Close mobile nav after clicking a link
  document.querySelectorAll('.nav-center a').forEach(a => {
    a.addEventListener('click', () => {
      if (navCenter) navCenter.classList.remove('open');
    });
  });

  // Highlight active nav link while scrolling
  const sections = document.querySelectorAll('.site-section');
  const navLinks = document.querySelectorAll('.nav-center a');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
        }
      });
    }, { root: null, threshold: 0.45 });
    sections.forEach(s => observer.observe(s));
  }
});
