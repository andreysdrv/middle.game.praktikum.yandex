import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { Unit } from '../../game/Unit'
import { Engine } from '../../game/Engine'
import { View } from '../../game/View'

export const Game = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isStarted) {
      const canvas = canvasRef.current
      if (canvas) {
        const unit = new Unit(canvas, { x: 160, y: 160 })
        const game = new Engine()
        const view = new View(canvas, unit)
        view.init()
        game.start()
      }
    }
  }, [isStarted])

  return (
    <section
      // временная стилизация для презентации
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
      }}>
      {!isStarted && <Button type={'primary'} onClick={() => setIsStarted(true)}>Играть</Button>}
      {isStarted && <canvas ref={canvasRef} width={800} height={800} />}
    </section>
  )
}
