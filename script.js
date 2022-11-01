const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;

const image = background;
ctx.drawImage(image, 0, 0);
