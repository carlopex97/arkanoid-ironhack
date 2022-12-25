class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;
    this.brick = new Brick(ctx);
    this.brickWall = new BrickWall(ctx);
    this.paddle = new Paddle(ctx);
    this.ball = new Ball(ctx);
    this.background = new Background(ctx);
  }

  start() {
    this.stop();
    this.initListeners();

    this.interval = setInterval(() => {
      this.clear();
      this.win();
      this.draw();
      this.checkCollisions();
      this.move();
    }, 1000 / 60);
  }

  initListeners() {
    document.onkeydown = (e) => {
      this.paddle.onKeyDown(e.keyCode);
    };
    document.onkeyup = (e) => {
      this.paddle.onKeyUp(e.keyCode);
    };
  }

  stop() {
    clearInterval(this.interval);
  }

  gameOver() {
    this.stop();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.background.draw();
    this.brickWall.draw();
    this.paddle.draw();
    this.ball.draw();
  }

  move() {
    this.paddle.move();
    this.ball.move();
  }

  checkCollisions() {
    if (this.ball.collidesWith(this.paddle)) {
      this.ball.vy *= -1;
    }
    for (const brick of this.brickWall.bricks) {
      if (brick.active && this.ball.collidesWith(brick)) {
        this.ball.vy *= -1;
        brick.destroy();
      }
    }
  }

  win() {
    if (this.brickWall.bricks.every((brick) => !brick.active)) {
      alert("Felicidades has ganado");
      this.stop();
    }
  }
}
