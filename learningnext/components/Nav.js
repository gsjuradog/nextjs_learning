import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
       
          <Image src='/../public/LogoBlackCircle.svg' width={60} height={60} alt='Gabriel Jurado Logo'></Image>
     
        {/* <h2>GSJuradoG</h2> */}
      </div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
