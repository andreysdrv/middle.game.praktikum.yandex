import { FC } from "react";
import { useState } from "react";
import { Button } from "antd";
import styles from "./styles.module.scss"

const gameStartButtons: string[] = ["Одиночная игра", "Сетевая игра", "Параметры"];
const gameEndButtons: string[] = ["Eщё раз", "Главное меню"];

export const Game: FC = () => {
  const [gameMode] = useState<string>("gameEnd");

  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>AWESOME BATTLE CITY</h1>

      {gameMode === 'gameStart' &&
        <div className={styles.alignContainer}>
          {gameStartButtons.map((item, index) => {
            return <div key={index}>
              <Button type="primary" className={styles.container__button}>{item}</Button>
            </div>
          })}
        </div>
      }

      {gameMode === 'gameEnd' &&
        <div className={styles.alignContainer}>
          <h2 className={styles.container__subtitle}>Игра окончена</h2>

          <p className={styles.container__score}>Счёт: <span>770</span></p>

          {gameEndButtons.map((item, index) => {
            return <div key={index}>
              <Button type="primary" className={styles.container__button}>{item}</Button>
            </div>
          })}
        </div>
      }
    </section>
  )
}
