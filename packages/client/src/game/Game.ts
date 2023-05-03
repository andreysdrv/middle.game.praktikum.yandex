import { View } from './View'
import { Enemy } from './Enemy'
import { Player } from './Player'

export class World {
  view: View
  player: Player
  enemy1: Enemy
  enemy2: Enemy
  enemy3: Enemy

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.loop = this.loop.bind(this)
    this.view = new View(canvas, context)
    this.view.init()
    this.player = new Player(canvas, context, { x: 160, y: 160 })
    this.player.render()
    this.setEventListeners()
    this.enemy1 = new Enemy(canvas, context, { x: 0, y: 0 })
    this.enemy2 = new Enemy(canvas, context, { x: canvas.width / 2 - 40, y: 0 })
    this.enemy3 = new Enemy(canvas, context, { x: canvas.width - 80, y: 0 })
    this.enemy1.render()
    this.enemy2.render()
    this.enemy3.render()
  }

  public setEventListeners() {
    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowUp') {
        this.player.moveUp()
        this.rerender()
      }
      if (e.code === 'ArrowDown') {
        this.player.moveDown()
        this.rerender()
      }
      if (e.code === 'ArrowLeft') {
        this.player.moveLeft()
        this.rerender()
      }
      if (e.code === 'ArrowRight') {
        this.player.moveRight()
        this.rerender()
      }
    })
  }

  private rerender() {
    this.view.update()
    this.player.render()
    this.enemy1.render()
    this.enemy2.render()
    this.enemy3.render()
  }

  public init() {
    requestAnimationFrame(this.loop)
  }

  private loop() {
    requestAnimationFrame(this.loop)
  }
}
