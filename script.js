<script>
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  showSlide(index);
}

// Avanza solo cada 5s
setInterval(nextSlide, 5000);

// ==== Lightbox ====
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// ==== Galería “Ver más” ====
function openGallery() {
  document.getElementById("gallery-modal").style.display = "block";
}
function closeGallery() {
  document.getElementById("gallery-modal").style.display = "none";
}
</script>

