class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.x = 0;
    this.y = 0;
    this.background = new Image();
    this.background.src = "../resources/background1.webp";
  }
  draw() {
    this.ctx.drawImage(this.background, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.background, this.x + this.w, this.y, this.w, this.h);
  }
}
