import React from 'react'
import styles from '@/styles/mypage.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Mypage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <img className={styles.icon01} src='/img/mypage/icon01.png' />
        <img className={styles.icon02} src='/img/mypage/icon02.png' />
        <div className={styles.box01}>
          <p>안녕하세요 000님의 마이룸 입니다</p>
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
            <img src='./img/mypage/d-day.png'/>
            <p>결혼식까지<br /><span>65일</span><br />남았습니다</p> 
          </div>
          <div className={styles.character}>
            <div className={styles.charTitle}>취향분석표</div>
            <div className={styles.collect}>
              <ul>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
                <li>청소하기</li>
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
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mypage