import { Button } from "antd";
import styles from "./styles.module.scss"
import "./../../../assets/root.css"

export const GameStart = () => {
    const buttons = ["Одиночная игра", "Сетевая игра", "Параметры"];

    return <div className={styles.container}>
        <h1 className={styles.container__title}>AWESOME BATTLE CITY</h1>

        {buttons.map(item => {
           return <Button type="primary" className={styles.container__button}>{item}</Button>
        })}
    </div>
}
