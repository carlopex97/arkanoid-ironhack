class Ball{
constructor(ctx){
    this.ctx = ctx;
    this.ballRadius = 10;
    this.x = this.ctx.canvas.width/2;
    this.y = this.ctx.canvas.height-30;
}
draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
}
move(){
    
}



}