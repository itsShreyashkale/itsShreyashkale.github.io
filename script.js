// ---------------- Navbar: Hamburger ----------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// ---------------- Dark/Light Mode ----------------
const darkToggle = document.getElementById("dark-toggle");

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove("dark");
    darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  darkToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// ---------------- Contact Form (EmailJS) ----------------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

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

// ---------------- Smooth Scroll for internal links ----------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    }
  });
});
