import { useState, useEffect } from 'react'
import styles from '@/styles/community.module.scss'
import List from './component/community/List'
import Bride from './component/community/Bride'
import Groom from './component/community/Groom'
import Link from 'next/link'
import Image from 'next/image'

const community = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const images = [
    '/img/community/icon06.png',
    '/img/community/icon11.png',
    '/img/community/icon12.png',
    '/img/community/icon13.png',
    '/img/community/icon14.png'
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage(currentImage => (currentImage + 1) % images.length)
  //   }, 1200)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <>
      <div className="H1" style={{marginBottom:"130px"}}>COMMUNITY</div>

      <div className={styles.bg01}>
        <Image src="/img/community/communitybg.png" alt='' width={400} height={160}/>
      </div>
      <div className={styles.bg02}>
        <Image src="/img/community/communitybg.png" alt='' width={400} height={160}/>
      </div>

      <article className={styles.container}>
        <div className={styles.category}>
          <div
            className={selectedCategory === 'ALL' ? styles.selected : ''} 
            onClick={() => handleClick('ALL')}
          >
            ALL
          </div>
          <div
            className={selectedCategory === '신부방' ? styles.selected : ''}
            onClick={() => handleClick('신부방')}
          >
            신부방
          </div>
          <div
            className={selectedCategory === '신랑방' ? styles.selected : ''}
            onClick={() => handleClick('신랑방')}
          >
            신랑방
          </div>
        </div>

        <div className={selectedCategory === 'ALL' ? styles.block : styles.none}> 
          <List/>
        </div>
        <div className={selectedCategory === '신부방' ? styles.block : styles.none}> 
          <Bride/>
        </div>
        <div className={selectedCategory === '신랑방' ? styles.block: styles.none}>
          <Groom/>
        </div>
      
        <div className={styles.sidebar}> 
          <Link href='/Write'>
              <button className={styles.slide}>글 작성하기</button>
          </Link>
          <div className={styles.sidebarI}>
            {/* <Image src={images[currentImage]} alt='' width={60} height={60}/> */}
            <Image src="/img/community/icon06.png" alt='' width={60} height={60}/>
          </div>
        </div>
      </article>
      
    </>
  )
}

export default community