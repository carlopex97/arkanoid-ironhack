const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)

const btn = document.getElementById("start-btn")
btn.onclick = () => {
  const intro = document.getElementById("intro")
  intro.remove()
  canvas.style.display = 'block'
  game.start()
}