class Paddle{
    constructor(ctx){
        this.ctx = ctx;
        this.h = 10;
        this.w = 75;
        this.x = (this.ctx.canvas.width-this.w)/2;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.ctx.canvas.height-this.h, this.w, this.h);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
    move(){
        
    }
    /*shoot(){

    }*/
    onKeyUp(){

    }
    onKeyDown(){

    }
    
    
    
    }