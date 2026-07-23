// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal for cards, steps, and about facts
const revealTargets = document.querySelectorAll(
  '.feature-card, .steps li, .about-copy, .contact-grid > *'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => io.observe(el));

// Hero bloom: replay the fold-open animation on click
const stage = document.querySelector('.hero-stage');
const petals = document.querySelectorAll('.petal-group .petal');

stage.addEventListener('click', () => {
  petals.forEach(p => {
    p.style.animation = 'none';
    // force reflow so the animation can restart
    void p.offsetWidth;
    p.style.animation = '';
  });
});

// Contact form: front-end only demo (no backend wired up)
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim().split(' ')[0] || 'there';
  note.textContent = `Thanks, ${name} — this is a demo form, so nothing was actually sent yet.`;
  form.reset();
});
