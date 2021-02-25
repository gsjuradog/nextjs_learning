import Head from 'next/head';
import styles from '../styles/Layout.module.css'
import Nav from './nav';

export default function Layout({children}) {
  return (
    <>
    <Nav></Nav>
    <Head>
      <title>My first NextJS Page</title>
      <link rel="icon" href="/MyfavIcon.ico"/>
    </Head>
    <div  className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
    </>
  )
}
