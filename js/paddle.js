class Paddle {
  constructor(ctx) {
    this.ctx = ctx;
    this.h = 10;
    this.w = 75;
    this.x = (this.ctx.canvas.width - this.w) / 2;
    this.vx = 0;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.ctx.canvas.height - this.h, this.w, this.h);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
  move() {
    this.x += this.vx;
    if (this.x <= 0) {
      this.vx = 0;
      this.x = 0;
    }
    if (this.x + this.w >= this.ctx.canvas.width) {
      this.vx = 0;
      this.x = this.ctx.canvas.width - this.w;
    }
  }
  /*shoot(){

    }*/
  onKeyUp(key) {
    console.log(key);
    switch (key) {
      case 39:
      case 37:
        this.vx = 0;
        break;
    }
  }
  onKeyDown(key) {
    console.log(key);
    switch (key) {
      case 39:
        this.vx = 5;
        break;
      case 37:
        this.vx = -5;
        break;
    }
  }
}
