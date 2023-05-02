import { Button } from "antd"
import styles from "./styles.module.scss"
import "./../../assets/root.css"

export const Landing = () => {
  return <div className={styles.container}>
    <h1 className={styles.container__title}>
      ДОБРО ПОЖАЛОВАТЬ<br />В <span className={styles.container__title__gameName}>AWESOME BATTLE CITY</span>
    </h1>

    <Button type="primary" size="large" className={styles.container__button}>Играть</Button>

    <h2 className={styles.container__subtitle}>
      <b>AWESOME BATTLE CITY</b> - невероятно крутой ремейк культовой компьютерной игры <b>BATTLE CITY</b>, выпущенной для игровых приставок Famicom и Game Boy.
    </h2>

    <h3 className={styles.container__team}>
      Команда разработки
    </h3>
  </div>
}
