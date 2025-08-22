function toggleAccordion(button) {
  const projectItem = button.closest(".project-item");
  const detailContent = projectItem.querySelector(".detail-content");
  const chevron = button.querySelector(".chevron");
  const buttonText = button.querySelector(".accordion-text");

  document.querySelectorAll(".project-item").forEach((item) => {
    if (item !== projectItem) {
      const otherDetail = item.querySelector(".detail-content");
      const otherChevron = item.querySelector(".chevron");
      const otherButtonText = item.querySelector(".accordion-text");

      otherDetail.classList.remove("open");
      otherDetail.classList.add("closed");
      otherChevron.classList.remove("rotate");
      otherButtonText.textContent = "View Details";
    }
  });

  if (detailContent.classList.contains("closed")) {
    detailContent.classList.remove("closed");
    detailContent.classList.add("open");
    chevron.classList.add("rotate");
    buttonText.textContent = "Hide Details";
  } else {
    detailContent.classList.remove("open");
    detailContent.classList.add("closed");
    chevron.classList.remove("rotate");
    buttonText.textContent = "View Details";
  }
}

window.addEventListener("load", function () {
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "all 0.6s ease-out";

      requestAnimationFrame(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });
    }, index * 150);
  });
});
