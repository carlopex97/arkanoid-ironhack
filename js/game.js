class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;
    this.brick = new BrickWall(ctx)
    this.paddle = new Paddle(ctx)
    this.ball = new Ball(ctx)
  }
  
  start() {
    this.stop()
    //this.initListeners()
    
    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.collisions()
      this.move()
    }, 1000 / 60)
  }
  
  stop() {
    

  }
  gameOver() {

  }
  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    )
  }
  draw() {
    //this.brick.drawBrick()
    this.paddle.draw()
    this.ball.draw()
  }
  move() {
    this.paddle.move()
  }
  collisions() {

  }
}
  

