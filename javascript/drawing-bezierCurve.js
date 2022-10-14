class DrawingBezierCurve extends PaintFunction{

    constructor(contextDraft,contextReal){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal
        this.count = 0;
    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = draw_color;
        // Kind of line
        this.contextDraft.lineJoin = "round";
        // Drawing the line here
        if(this.count===0){
            this.origX = coord[0];
            this.origY = coord[1];
            saveToSavePoint();
        }
    }

    onDragging(coord, event) {
        if(this.count===0){
            this.clearCanvas();
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY); 
            this.secondX=coord[0];
            this.secondY=coord[1]
            this.contextDraft.lineTo(this.secondX,this.secondY);
            this.contextDraft.stroke(); 
        }
        else if(this.count===1){
            this.clearCanvas();
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.firstControlPointX= coord[0];
            this.firstControlPointY = coord[1];
            this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.secondX,this.secondY);
            // this.contextDraft.beizerCurveTo(coord[0],coord[1],this.secondX,this.secondY,this.secondX,this.secondY);
            this.contextDraft.stroke();
            
        }

        else if (this.count===2){
            this.clearCanvas();
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            if(this.firstControlPointX<coord[0]){
                this.contextDraft.bezierCurveTo(this.firstControlPointX,this.firstControlPointY,coord[0],coord[1],this.secondX,this.secondY);
            }
            else if(this.firstControlPointX>coord[0]){
                this.contextDraft.bezierCurveTo(coord[0],coord[1],this.firstControlPointX,this.firstControlPointY,this.secondX,this.secondY);
            }
            this.contextDraft.stroke()
        }
      }
    // onDragging(){}

    onMouseMove() {}

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = "black";
        this.contextReal.strokeStyle = draw_color;
        // Kind of line
        this.contextReal.lineJoin = "round";
        // Width of line
        this.contextReal.lineWidth = draw_width;

        if(this.count===0||this.count===1){
            this.count++;
            console.log(this.count)
        }
        else if(this.count===2){
            this.clearCanvas();
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            if(this.firstControlPointX<coord[0]){
                this.contextReal.bezierCurveTo(this.firstControlPointX,this.firstControlPointY,coord[0],coord[1],this.secondX,this.secondY);
            }
            else if(this.firstControlPointX>coord[0]){
                this.contextReal.bezierCurveTo(coord[0],coord[1],this.firstControlPointX,this.firstControlPointY,this.secondX,this.secondY);
            }
            this.contextReal.stroke();
            console.log(this.count);
            this.count=0;

            push()
            
        }
    }
    // onMouseUp(){}
    onMouseLeave() {}
    onMouseEnter() {}
    

    clearCanvas = () =>{
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        )
    }
}