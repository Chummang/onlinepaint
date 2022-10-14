
function clear_canvas() {
  contextReal.fillStyle = start_background_color;
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
  push();
}

document.querySelector("#clear").addEventListener("click", clear_canvas);