import { Inter } from '@next/font/google'
import styles from '@/styles/main.module.scss'
import Link from 'next/link'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <Link href="/Community">community</Link>
        </div>
        <div>
          <Link href="/CheckList">check list</Link>
        </div>
        <div>
          <Link href="/Invitation">invitation</Link>
        </div>
        <div>
          <Link href="/Quiz">quiz</Link>
        </div>
        <div>
          <Link href="/SDM">SDM</Link>
        </div>
        <div>
          <Link href="/Weather">Weather</Link>
        </div>
      </main>
    </>
  )
}
