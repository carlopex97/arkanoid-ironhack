class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;
    this.brick = new BrickWall(ctx);
    this.paddle = new Paddle(ctx);
    this.ball = new Ball(ctx);
    this.background = new Background(ctx);
  }

  start() {
    this.stop();
    this.initListeners();

    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.collisions();
      this.move();
    }, 1000 / 60);
  }
  initListeners() {
    document.onkeydown = (e) => {
      this.paddle.onKeyDown(e.keyCode);
    };
    document.onkeyup = (e) => {
      this.paddle.onKeyUp(e.keyCode)
    }
  }
  stop() {}
  gameOver() {}
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  draw() {
    this.background.draw();
    //this.brick.drawBrick()
    this.paddle.draw();
    this.ball.draw();
    
  }
  
  move() {
    this.paddle.move();
    this.ball.move();
  }
  collisions() {}
}
