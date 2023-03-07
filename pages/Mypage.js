import React from 'react'
import styles from '@/styles/mypage.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Mypage = () => {
  const {data:session, status} =useSession();

  console.log(session)

  return (
    <main className={styles.main}>
      <div className={styles.mainWidth}>
        <div className={styles.top}>
          <img className={styles.icon01} src='/img/mypage/icon01.png' />
          <img className={styles.icon02} src='/img/mypage/icon02.png' />
          <div className={styles.box01}>
            <p>안녕하세요 <br className={styles.br} />{session.user.name} 님의 마이룸 입니다</p>
            <div className={styles.icon03}>
              <img src='/img/mypage/face01.png' />
              <img src='/img/mypage/face02.png' />
              <img src='/img/mypage/face03.png' />
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <Link href="/Edit">
            <img src='/img/mypage/set.png' />
          </Link>
          <div className={styles.middle}>
            <div className={styles.dday}>
              <p>결혼식까지<br /><span>65일</span><br />남았습니다</p> 
            </div>
            <div className={styles.character}>
              <div className={styles.charTitle}>취향분석표</div>
              <div className={styles.collect}>
                <ul>
                  <li>#청소하기</li>
                  <li>#설거지하기</li>
                  <li>#화장실청소하기</li>
                  <li>#내가 요리사</li>
                  <li>#시각예민</li>
                  <li>#토종한국인</li>
                  <li>#밖순이</li>
                  <li>#냉미녀</li>
                  <li>#여유</li>
                  <li>#내껌딱지</li>
                  <li>#실용적인 선물</li>
                  <li>#예비아들바보</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.btn}>
              <button>내가 쓴글</button>
              <button>좋아요</button>
              <button>보관</button>
            </div>
            <div className={styles.container}>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
              <div className={styles.content}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mypage