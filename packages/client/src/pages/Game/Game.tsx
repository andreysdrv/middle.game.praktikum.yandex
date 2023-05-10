import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { World } from '../../game/World'

import { useState } from "react";
import { Button } from "antd";
import styles from "./styles.module.scss"

export const Game = () => {
  const [buttonsList] = useState<Array<string>>(["Одиночная игра", "Сетевая игра", "Параметры"]);
  const [buttonsList2] = useState<Array<string>>(["Eщё раз", "Главное меню"]);
  const [gameMode] = useState<string>("gameEnd");
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
    <section>
      { gameMode === 'gameStart' &&
        <div className={styles.container}>
          <h1 className={styles.container__title}>AWESOME BATTLE CITY</h1>

          {buttonsList.map((item, index) => {
            return <div key={index}>
              <Button type="primary" className={styles.container__button}>{item}</Button>
            </div>
          })}
        </div>
      }

      {gameMode === 'gameEnd' &&
        <div className={styles.container}>
          <h1 className={styles.container__title}>AWESOME BATTLE CITY</h1>

          <h2 className={styles.container__subtitle}>Игра окончена</h2>

          <p className={styles.container__score}>Счёт: <span>770</span></p>

          {buttonsList2.map((item, index) => {
            return <div key={index}>
              <Button type="primary" className={styles.container__button}>{item}</Button>
            </div>
          })}
        </div>
      }
    </section>
  )
}
