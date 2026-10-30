import { Link } from "react-router"

import styles from "./Card.module.css"

export default function Card({ name, description, price, baker, url }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.text}>{description}</p>
      <p className={styles.price}>Preis: {price}</p>
      <p>Bäcker: {baker.firstname} {baker.lastname}</p>
      <Link to={url} className={styles.link}>
        Details anzeigen
      </Link>
    </article>
  )
}
