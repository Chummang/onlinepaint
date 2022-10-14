let fontBoxCounter = false;  

$('#font-picker-selector').change( function() {
    styleGuide.font = ($('#font-picker-selector option:selected').text());
});

class Text extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.origX = null;
        this.origY = null;
    }

    onMouseDown(coord, styleGuide, event){  
        
        if (fontBoxCounter == false) {
            
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.font = `${styleGuide.textSize}px ${styleGuide.font}`;
            this.contextReal.fillStyle = styleGuide.fillColor;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.border = "2px white solid";
            input.style.placeholder = 'Type please!';
            input.style.height = 100;
            input.style.width = 600;
            input.style.font = styleGuide.font;
            input.placeholder = "To add text, click here, type, and push 'Enter'";
            input.style.left = (this.origX - 5) + 'px'; //the position of input when you click mouse//
            input.style.top = (this.origY - 5) + 'px';
            input.id= 'textBox' 
            let text = document.body.appendChild(input);
            fontBoxCounter = true;
            
            input.onkeydown = function handleEnter(input) {
                if (input.key == 'Enter') {
                    this.typedText= document.getElementById("textBox").value;
                    contextReal.fillText(this.typedText, event.clientX, event.clientY);
                    document.body.removeChild(this);
                    fontBoxCounter = false;
                    saveToSavePoint();
                }
            };   
            
        } 
    }

    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}
