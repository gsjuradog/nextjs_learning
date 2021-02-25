import Image from 'next/image';
import styles from '../styles/Header.module.css'
export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src="/myLogo.svg" alt="Gabriel's Logo big" height={350} width={350} />
        <section className={styles.myName}>
          <h1>Gabriel Santiago Jurado-González</h1>
        </section>
      </div>
    </header>
  )
}
