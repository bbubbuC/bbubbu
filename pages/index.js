import { Inter } from '@next/font/google'
import styles from '@/styles/main.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Weather from './Weather'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'


export default function Home() {

  const [intro, setIntro] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 8000)
    
  }, [])


  if (intro && count) {
    return (
      <div className={styles.back}>
        <div className={styles.intro}>
          <Image className={styles.hartA} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartB} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartC} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartD} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartE} src="/img/intro/hart1.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartF} src="/img/intro/hart2.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartG} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartH} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartI} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartJ} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartK} src="/img/intro/hart.png" width={400} height={400} alt='' ></Image>
          <Image className={styles.hartL} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartM} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartN} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartO} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartP} src="/img/intro/hart.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartQ} src="/img/intro/hart.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartR} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartS} src="/img/intro/hart.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartT} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartU} src="/img/intro/hart.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartV} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
          <Image className={styles.hartW} src="/img/intro/hart1.png" width={350} height={350} alt='' ></Image>
        </div>
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
      </div>
    )
  }

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
