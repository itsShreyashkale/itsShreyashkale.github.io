// Elements
const themeToggle = document.getElementById('themeToggle');
const menuToggle  = document.getElementById('menuToggle');
const nav         = document.getElementById('nav');
const yearEl      = document.getElementById('year');
const scrollTopBtn= document.getElementById('scrollTop');

// Year
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Restore theme choice
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

// Toggle theme: cycle dark -> light -> system
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'system';
  const next = current === 'dark' ? 'light' : current === 'light' ? 'system' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.querySelector('.material-symbols-rounded').textContent =
    next === 'dark' ? 'light_mode' : 'dark_mode';
});

// Mobile menu
menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id && id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Back to top
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('show')),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// EmailJS form (uses your existing keys)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    // Reuse your service/template IDs
    emailjs
      .send("service_801dtwn", "template_gg9ee3o", params)
      .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
}
