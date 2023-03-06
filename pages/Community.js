import { useState, useEffect } from 'react'
import styles from '@/styles/community.module.scss'
import List from './component/community/List'
import Link from 'next/link'
import Image from 'next/image'

const community = () => {

  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    '/img/community/icon06.png',
    '/img/community/icon11.png',
    '/img/community/icon12.png',
    '/img/community/icon13.png',
    '/img/community/icon14.png'
]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length)
    }, 1300)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <button className={styles.up}>Fill Up</button>
      <div className="H1" style={{marginBottom:"150px"}}>COMMUNITY</div>

      <div className={styles.bg01}>
        <Image src="/img/community/communitybg.png" alt='' width={400} height={160}/>
      </div>
      <div className={styles.bg02}>
        <Image src="/img/community/communitybg.png" alt='' width={400} height={160}/>
      </div>

      <article className={styles.container}>
        <div className={styles.category}>
          <div>ALL</div>
          <div>신부방</div>
          <div>신랑방</div>
        </div>
        <List/>
        <div className={styles.sidebar}> 
          <Link href='/Write'>
            <div className={styles.sidebarW}>
              글 작성하기
            </div>
          </Link>
          <div className={styles.sidebarI}>
            <Image src={images[currentImage]} alt='' width={60} height={60}/>
          </div>
        </div>
      </article>
      
    </>
  )
}

export default community