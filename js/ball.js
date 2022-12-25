class Ball {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.ballRadius = 30;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 40;
    this.h = this.ballRadius
    this.w = this.ballRadius
    this.vx = 3;
    this.vy = 3;
    this.image = new Image();
    this.image.src = '/resources/ball.png';
  }

    draw() {
      this.ctx.save();
      if (DEBUG){
        this.ctx.strokeStyle = "red"
        this.ctx.strokeRect(this.x, this.y, this.w, this.h)
      }
      
      this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
      this.ctx.restore();
    }
  

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y - this.ballRadius <= 0) {
      this.vy *= -1;
      this.y = 0 + this.ballRadius;
    }
    if (this.y + this.ballRadius >= this.ctx.canvas.height) {
      this.vy *= -1;
      this.y = this.ctx.canvas.height - this.ballRadius;
    }
    if (this.x - this.ballRadius <= 0) {
      this.vx *= -1;
      this.x = 0 + this.ballRadius;
    }
    if (this.x + this.ballRadius >= this.ctx.canvas.width) {
      this.vx *= -1;
      this.x = this.ctx.canvas.width - this.ballRadius;
    }
  }

  collidesWith(element) {
   
      return (
        this.x < element.x + element.w &&
        this.x + this.w > element.x &&
        this.y < element.y + element.h &&
        this.h + this.y > element.y
      )
  }
}
