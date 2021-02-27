import Image from 'next/image';
import styles from '../styles/Header.module.css'
export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={` ${styles.title}`}>
        <span>WebDev News</span>
          <p className={styles.description}>Stay up to date with the latest Web News</p>
      </h1>
    </header>
  )
}
