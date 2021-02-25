
import Header from '../components/Header';

import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
    </>
  )
}
