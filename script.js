const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const fullScreenButton = document.getElementById("fullScreenButton");
canvas.width = 1920;
canvas.height = 1080;

const image = background;
ctx.drawImage(image, 0, 0);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen().catch((err) => {
      alert("Error");
    });
  } else {
    document.exitFullscreen();
  }
}
fullScreenButton.addEventListener("click", toggleFullScreen);
