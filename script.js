const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 320;

const image = background;
ctx.drawImage(image, 0, 0);
