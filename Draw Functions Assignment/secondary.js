// Shortcut functions
function stroke(color) {
  ctx.strokeStyle = color;
}

function fill(color) {
  ctx.fillStyle = color;
}

function lineWidth(width) {
  ctx.lineWidth = width;
}

// Draw a rectangle
function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  }
}

// Draw a circle
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  }
}
