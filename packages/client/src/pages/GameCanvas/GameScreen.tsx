import { useEffect, useRef } from 'react'

export const GameScreen  = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvas.current?.getContext('2d')

    if (!ctx || !canvas.current) return

    ctx.fillRect(0,0,canvas.current.width,canvas.current.height)

  }, [])
  
  
  return <canvas ref={canvas} width={500} height={500} />
}
