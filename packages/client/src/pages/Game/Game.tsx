import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { World } from '../../game/World'

export const Game = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isStarted) {
      const canvas = canvasRef.current
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          const game = new World(canvas, context)
          game.init()
        }
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
