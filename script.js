// Fade-in efekt při scrollu
const sections = document.querySelectorAll('#portfolio, #about, #contact-form-section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Smooth scroll pro tlačítka a odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// JS pro lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});


// zavření kliknutím mimo obrázek
lightbox.addEventListener("click", e => {
  if(e.target === lightbox) lightbox.classList.remove("active");
});

const arrow = document.querySelector(".arrow");
const dropdown = document.querySelector(".dropdown");

arrow.addEventListener("mouseenter", () => {
  dropdown.style.display = "flex";
});

arrow.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdown.matches(':hover')) dropdown.style.display = "none";
  }, 300);
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});






