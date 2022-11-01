const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 360;

const image = background;
ctx.drawImage(image, 0, 0);
