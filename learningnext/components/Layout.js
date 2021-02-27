import Head from 'next/head';
import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Nav from './nav';


export default function Layout({children}) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>My first NextJS Page</title>
      <link rel="icon" href="/MyfavIcon.ico"/>
    </Head>
    <Nav></Nav>
    <div  className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
    <Footer></Footer>
    </>
  )
}
