class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.ballRadius = 10;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 30;
    this.vx = 1;
    this.vy = 1;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y - this.ballRadius <= 0) {
      this.vy *= -1;
      this.y = 0+this.ballRadius;
    }
    if (this.y + this.ballRadius >= this.ctx.canvas.height) {
      this.vy *= -1;
      this.y = this.ctx.canvas.height - this.ballRadius;
    }
    if (this.x - this.ballRadius <= 0) {
      this.vx *= -1;
      this.x = 0+this.ballRadius;
    }
    if (this.x + this.ballRadius >= this.ctx.canvas.width) {
      this.vx *= -1;
      this.x = this.ctx.canvas.width - this.ballRadius;
    }
  }
}
