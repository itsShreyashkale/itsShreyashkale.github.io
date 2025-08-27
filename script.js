// ---------- Navbar Toggle ----------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.querySelector('i').classList.toggle('fa-bars');
  menuToggle.querySelector('i').classList.toggle('fa-xmark');
});

// ---------- Back to Top ----------
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Smooth scroll for back to top
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ---------- Active Navbar Highlight ----------
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ---------- Scroll Reveal Animations ----------
const revealElements = document.querySelectorAll(".card, .skill-card, .section-title, .home-content, .profile-pic");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ---------- Add Animation Styles ----------
const style = document.createElement("style");
style.innerHTML = `
  .card, .skill-card, .section-title, .home-content, .profile-pic {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
  }
  .card.show, .skill-card.show, .section-title.show, .home-content.show, .profile-pic.show {
    opacity: 1;
    transform: translateY(0);
  }
  .nav-links li a.active {
    color: #38bdf8;
    border-bottom: 2px solid #38bdf8;
  }
`;
document.head.appendChild(style);
