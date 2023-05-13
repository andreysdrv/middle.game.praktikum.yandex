import { Tank } from './Tank'

export class Enemy extends Tank {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, position: { x: number, y: number}) {
    super(canvas, context, position)
    this.position = position
  }

  public render() {
    this.context.beginPath()
    this.context.rect(this.position.x, this.position.y, Tank.size, Tank.size)
    this.context.fillStyle = 'red'
    this.context.fill()
    this.context.closePath()
  }
}
