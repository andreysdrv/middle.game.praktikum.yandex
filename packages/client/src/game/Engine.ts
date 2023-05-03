export class Engine {
  constructor() {
    this.loop = this.loop.bind(this)
  }

  public start() {
    requestAnimationFrame(this.loop)
  }

  private loop() {
    requestAnimationFrame(this.loop)
  }
}
