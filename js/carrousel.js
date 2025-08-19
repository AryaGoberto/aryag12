document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".carousel-wrapper");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  let currentIndex = 0;
  const totalSlides = items.length;

  // Buat indikator secara dinamis
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add(
      "indicator",
      "w-4",
      "h-4",
      "bg-gray-500",
      "rounded-full",
      "cursor-pointer",
      "transition-colors",
      "duration-300"
    );
    indicator.dataset.index = i;
    indicatorsContainer.appendChild(indicator);
  }
  const indicators = document.querySelectorAll(".indicator");

  function updateCarousel() {
    // Pindahkan wrapper
    const offset = -currentIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;

    // Perbarui indikator
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.remove("bg-gray-500");
        indicator.classList.add("bg-blue-500");
      } else {
        indicator.classList.remove("bg-blue-500");
        indicator.classList.add("bg-gray-500");
      }
    });
  }

  // Tombol Navigasi
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Klik Indikator
  indicatorsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("indicator")) {
      const index = parseInt(e.target.dataset.index);
      currentIndex = index;
      updateCarousel();
    }
  });

  // Inisialisasi awal
  updateCarousel();
});
