import { Unit } from './Unit'

export class View {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  unit: Unit
  isShooting: boolean

  constructor(canvas: HTMLCanvasElement, unit: Unit) {
    this.canvas = canvas
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = canvas.getContext('2d')!
    this.unit = unit
    this.setEventListeners()
    this.isShooting = false
  }

  public init() {
    this.context.fillStyle = 'black'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.unit.render()
  }

  private setEventListeners() {
    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowUp') {
        this.unit.moveUp()
        this.update()
      }
      if (e.code === 'ArrowDown') {
        this.unit.moveDown()
        this.update()
      }
      if (e.code === 'ArrowLeft') {
        this.unit.moveLeft()
        this.update()
      }
      if (e.code === 'ArrowRight') {
        this.unit.moveRight()
        this.update()
      }
      if (e.code === 'Space' &&  !this.isShooting) {
        this.unit.fire()
        this.update()
      }
    })
  }

  public update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.fillStyle = 'black'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.unit.render()
  }
}
