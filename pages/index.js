import { Inter } from '@next/font/google'
import styles from '@/styles/main.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Weather from './Weather'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* test */}
      <main className={styles.main}>
        <section className={styles.iconBox}>
          <div className={styles.icon02}></div>
          <div className={styles.icon01}></div>
          <div className={styles.icon03}></div>
        </section>

        <section className={styles.box01}>
          <div className={styles.introduce}>
            {/* <Weather></Weather> */}
          </div>
          <Link href="/Community">
            <div className={styles.community}>
            </div>
          </Link>
        </section>

        <section className={styles.box02}>
          <Link href="/CheckList">
            <div className={styles.checkList}></div>
          </Link>
          <Link href="/Invitation">
            <div className={styles.invitation}></div> 
          </Link>
          <Link href="/Quiz">
            <div className={styles.quiz}></div>
          </Link>
          <Link href="/SDM">
            <div className={styles.sdm}></div>
          </Link>
        </section>


      </main>
    </>
  )
}
