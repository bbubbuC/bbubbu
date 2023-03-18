import { useState, useEffect } from 'react'
import styles from '@/styles/community.module.scss'
import List from './component/community/List'
import Bride from './component/community/Bride'
import Groom from './component/community/Groom'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'
import Swal from "sweetalert2";

const Community = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const moveToTop = () => (document.documentElement.scrollTop = 0);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(()=>{
    if (status !== "authenticated") {
      Swal.fire({
        title: '로그인 후 이용해주세요!',
        text: '',
        imageUrl: 'https://ifh.cc/g/vGnSKW.png',
        imageWidth: 175,
        imageHeight: 150,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonText: '로그인 하러가기 👉',
        reverseButtons: true
      }).then(() => {
        router.push('/Login');
      })
    }
  },[status])

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
            <Image src="/img/community/iiiii.gif" alt='' width={55} height={55}/>
          </div>
        </div>
      </article>
      <button className={styles.topBTN} onClick={moveToTop}>임시버튼(위로가기)</button> 
    </>
  )
}

export default Community