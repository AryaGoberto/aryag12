const images = [
  "./img/gdgoc.JPG",
  "./img/triopr.png",
  "https://placehold.co/600x400/1e293b/d1d5db?text=Extra",
];

let currentIndex = 0;
const slideImg = document.getElementById("autoSlideImg");

setInterval(() => {
  // Fade out dulu
  slideImg.classList.add("opacity-0");

  setTimeout(() => {
    // Ganti gambar pas udah fade out
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.src = images[currentIndex];

    // Fade in
    slideImg.classList.remove("opacity-0");
  }, 500); // 500ms sesuai durasi fade
}, 3000);
