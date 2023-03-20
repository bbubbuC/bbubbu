import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/mypage.module.scss'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { DbContext } from './component/MyContext'
import KeepList from './component/mypage/MyData'
import LikeList from './component/mypage/LikeData'
import MyData from './component/mypage/MyData'
import LikeData from './component/mypage/LikeData'

const Mypage = () => {
  const {quizData, userInfo,data,like} = useContext(DbContext);
  const {data:session, status} =useSession();
  const keydata = require('public/data/data.json');
  const [keywords, setKeywords] = useState()

  let [diffDay,setDiffDay] = useState();
  const [selectedCategory,setSelectedCategory] = useState('mydata');
  
  //dday
  const ddayFun = () => {
    const date = new Date(userInfo.date);
    const today = new Date();
    const diffTime = date.getTime()-today.getTime(); 
    setDiffDay( Math.ceil(diffTime/(1000*60*60*24)));
  }

  useEffect(()=>{
    
    if(quizData.length){
      let kw,kwArr=[], db = quizData[quizData.length-1];
      keydata.forEach((obj,key) => {
        if(obj.answera == db[`q0${key+1}`] ){
          kw = (db.gender == '신부') ? obj.keywordag : obj.keywordab
        }else{
          kw = (db.gender == '신부') ? obj.keywordbg : obj.keywordbb
        }
        kwArr[key] = kw;
      });
      
      setKeywords(kwArr)
      ddayFun()
      
    }
  },[quizData])

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainWidth}>
        <div className={styles.top}>
          <img className={styles.icon01} src='/img/mypage/icon01.png' />
          <img className={styles.icon02} src='/img/mypage/icon02.png' />
          <div className={styles.box01}>
            <p>안녕하세요 <br className={styles.br} />{userInfo?.nickname} 님의 마이룸 입니다</p>
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
              <p>결혼식까지<br /><span>{diffDay}일</span><br />남았습니다</p> 
            </div>
            <div className={styles.character}>
              <div className={styles.charTitle}>취향분석표</div>
              <div className={styles.collect}>
                <ul>
                  {
                    keywords&&keywords.map((item,key) => (
                      <li key={key}>#{item}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.btn}>
              <button className={selectedCategory === 'mydata' ? styles.selected : ''} onClick={()=>handleClick('mydata')}>내가 쓴글</button>
              <button className={selectedCategory === 'likedata' ? styles.selected : ''} onClick={()=>handleClick('likedata')}>좋아요</button>
            </div>
            <div className={styles.container}>
              <div className={selectedCategory === 'mydata' ? styles.block : styles.none}>
                <MyData />
              </div>
              <div className={selectedCategory === 'likedata' ? styles.block : styles.none}>
                <LikeData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mypage