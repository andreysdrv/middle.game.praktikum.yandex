import { Unit } from './Unit'

export class Projectile {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  x: number
  y: number
  static h = 30
  static w = 10

  constructor(unit: Unit, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context = context
    this.x = unit.x + Unit.size / 2 - Projectile.w / 2
    this.y = unit.y - Projectile.h
  }

  public render() {
    this.context.beginPath()
    this.context.rect(this.x, this.y, Projectile.w, Projectile.h)
    this.context.fillStyle = 'red'
    this.context.fill()
    this.context.closePath()
  }
}
