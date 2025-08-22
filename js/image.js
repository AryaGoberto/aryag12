const slide1Images = ["./img/gdgoc/core_team.png", "./img/gdgoc/triopr.png"];
const slide2Images = ["./img/recursion/fullpanit.png", "./img/recursion/compe.png"];

function startSlideshow(imgId, images, interval = 2500) {
  const img = document.getElementById(imgId);
  let index = 0;

  setInterval(() => {
    img.classList.add("opacity-0");

    setTimeout(() => {
      index = (index + 1) % images.length;
      img.src = images[index];

      setTimeout(() => {
        img.classList.remove("opacity-0");
      }, 50);
    }, 400);
  }, interval);
}

startSlideshow("slide1Img", slide1Images);
startSlideshow("slide2Img", slide2Images);