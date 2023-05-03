import { Avatar } from "antd"
import styles from "./styles.module.scss"
import "./../../../assets/root.css"

export const UserCircle = ({name, src}) => {
   return <div className={styles.container}>
       <Avatar className={styles.container__avatar} src={src}>User</Avatar>
       <span className={styles.container__text}>{name}</span>
   </div>
}
