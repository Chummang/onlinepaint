class Eraser extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  
  onMouseDown(coord, event) {
    
    this.context.globalCompositeOperation = "destination-out";
    this.context.lineJoin = "round";
    
    this.context.lineWidth = $("#eraserSize").val();
    
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {
    this.context.globalCompositeOperation = "source-over";
    push();
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.context.lineTo(x, y);
    
    this.context.stroke();
  }
}