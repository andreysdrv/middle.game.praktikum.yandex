import { Projectile } from './Projectile'

export class Unit {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  x: number
  y: number
  static step = 80
  static size = 80
  projectile: Projectile
  isShooting: boolean

  constructor(canvas: HTMLCanvasElement, { x, y }: { x: number; y: number }) {
    this.canvas = canvas
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = canvas.getContext('2d')!
    this.x = x
    this.y = y
    this.isShooting = false
    this.projectile = {} as Projectile
  }

  public moveUp() {
    if (this.y - Unit.step < 0) return
    this.y -= Unit.step
  }

  public moveDown() {
    if (this.y + Unit.step + Unit.size > this.canvas.height) return
    this.y += Unit.step
  }

  public moveLeft() {
    if (this.x - Unit.step < 0) return
    this.x -= Unit.step
  }

  public moveRight() {
    if (this.x + Unit.step + Unit.size > this.canvas.width) return
    this.x += Unit.step
  }

  public fire() {
    this.isShooting = true
    this.projectile = new Projectile(this, this.canvas, this.context)

  }

  public render() {
    this.context.beginPath()
    this.context.rect(this.x, this.y, Unit.size, Unit.size)
    this.context.fillStyle = 'green'
    this.context.fill()
    this.context.closePath()

    if (this.isShooting && this.projectile.render) {
      this.projectile.render()
    }
  }
}
