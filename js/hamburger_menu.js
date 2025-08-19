const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // show/hide menu
  menu.classList.toggle("flex"); // biar flex kalau tampil
});

//
function toggleDetail(btn) {
  // Temukan elemen induk dengan class "project-item"
  const projectItem = btn.closest(".project-item");

  // Cari elemen dengan class "detail-content" di dalam "project-item" tersebut
  const detail = projectItem.querySelector(".detail-content");

  // Toggle class untuk animasi tinggi
  detail.classList.toggle("max-h-0");
  detail.classList.toggle("max-h-[500px]");

  // Ubah teks tombol
  if (btn.innerText === "View Details") {
    btn.innerText = "Hide Details";
  } else {
    btn.innerText = "View Details";
  }
}

//

