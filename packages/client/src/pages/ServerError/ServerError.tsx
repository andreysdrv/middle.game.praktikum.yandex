import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"
import "./../../assets/root.css"

export const ServerError = () => {
  return <div className={styles.container}>
    <img src="/public/serverErrorPage/serverError.svg" alt="" className={styles.container__image} />

    <h1 className={styles.container__title}>Что-то пошло не так :(</h1>

    <Link className={styles.container__link} to="/">
      На главную
    </Link>
  </div>
}
