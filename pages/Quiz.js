import React, { useEffect, useState } from 'react'
import styles from '@/styles/quiz.module.scss'
import Link from 'next/link';

const Quiz = () => {
  const [bg,setBg]=useState(true);
  const [collect,setCollect]=useState([]);
  const [quizNum,setQuizNum]=useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const data = require('public/data/data.json')

//버튼 값 담아두기
function addData(text) {
  setCollect(enter => [...enter, text])
}

//버튼클릭시 1씩증가
function increaseQuizNum() {
  setQuizNum(prevNum => prevNum + 1);
}

//마지막 선택한 값 보여주기
function showResults() {
  setBg(true);
}

//인트로 화면 보여주기
useEffect(() => {
  setTimeout(() => {
    setShowIntro(false);
  }, 1500);
}, []);

if (showIntro) {
  return (
    <div className={styles.intro}>
      <img className={styles.bbu} src='/img/quiz/bbu.png' />
      <img className={styles.front} src='/img/quiz/introFront.png' />
    </div>
  );
}

if (quizNum === 13) {
  return (
    <main className={styles.main}>
      <div className={styles.result}>
        <div className={styles.computer}>
          <div className={styles.icon}>
            <img src='/img/quiz/icon01.png'/>
            <img src='/img/quiz/icon02.png'/>
            <img src='/img/quiz/icon03.png'/>
          </div>
          <div className={styles.resultContainer}>
            <p>마이페이지로</p>
            <Link href="/Mypage">
              <img src='/img/quiz/screen.png' />
            </Link>
        </div>
        </div>
        <div className={styles.vase}>
          <img className={styles.rstem} src='/img/quiz/rightStem.png'/>
          <img className={styles.lstem} src='/img/quiz/leftStem.png'/>
          <img className={styles.fvase} src='/img/quiz/vase.png'/>
          <img className={styles.rflower} src='/img/quiz/rightFlower.png'/>
          <img className={styles.lflower} src='/img/quiz/leftFlower.png'/>
        </div> 
        <div className={styles.candle}>
          <img src='/img/quiz/candlelight.png'/>
        </div>
        <div className={styles.post}>
          <h2>MY CHOICE</h2>
          {
            collect.map((item,key) => (
              <p key={key}>{item}</p>
            ))
          }
        </div>
      </div>
    </main> 
  );
}
  return (
    <main className={styles.main}>
      <div className={styles.back}>
        <div className={bg?`${styles.container}`:`${styles.container} ${styles.noneContainer}`}>
          <section className={styles.start} >
            <div className={styles.computer}>
              <div className={styles.icon}>
                <img src='/img/quiz/icon01.png'/>
                <img src='/img/quiz/icon02.png'/>
                <img src='/img/quiz/icon03.png'/>
              </div>
              <div className={styles.hscreen}>
                <img src='/img/quiz/heartscreen.png'/>
              </div>
              <div className={styles.screen} onClick={() => setBg(false)}>
                <img src='/img/quiz/screen.png'/>
                <p>MOVE TO QUIZ</p> 
              </div>
            </div>
            <div className={styles.vase}>
              <img className={styles.rstem} src='/img/quiz/rightStem.png'/>
              <img className={styles.lstem} src='/img/quiz/leftStem.png'/>
              <img className={styles.fvase} src='/img/quiz/vase.png'/>
              <img className={styles.rflower} src='/img/quiz/rightFlower.png'/>
              <img className={styles.lflower} src='/img/quiz/leftFlower.png'/>
            </div>
            <div className={styles.candle}>
              <img src='/img/quiz/candlelight.png'/>
            </div>
            <div className={styles.post}>
              <h2>MY CHOICE</h2>
            </div>
          </section>  
          <section className={styles.balance}>
            <div className={styles.computer}>
              <div className={styles.icon}>
                <img src='/img/quiz/icon01.png'/>
                <img src='/img/quiz/icon02.png'/>
                <img src='/img/quiz/icon03.png'/>
              </div>
              <h2>{data[quizNum].title}</h2>
              <div className={styles.screen}>
                <div className={styles.screen01}>
                  <button onClick={() => {addData(data[quizNum].answera);increaseQuizNum();if(quizNum === 12){showResults();}}}>{data[quizNum].answera}</button>
                </div>
                <div className={styles.screen02}>
                  <button onClick={() => {addData(data[quizNum].answerb);increaseQuizNum();if(quizNum === 12){showResults();}}}>{data[quizNum].answerb}</button>
                </div>
              </div>
            </div>
            <div className={styles.vase}>
              <img className={styles.rstem} src='/img/quiz/rightStem.png'/>
              <img className={styles.lstem} src='/img/quiz/leftStem.png'/>
              <img className={styles.fvase} src='/img/quiz/vase.png'/>
              <img className={styles.rflower} src='/img/quiz/rightFlower.png'/>
              <img className={styles.lflower} src='/img/quiz/leftFlower.png'/>
            </div> 
            <div className={styles.candle}>
              <img src='/img/quiz/candlelight.png'/>
            </div>
            <div className={styles.post}>
              <h2>MY CHOICE</h2>
              {
                collect.map((item,key) => (
                  <p key={key}>{item}</p>
                ))
              }
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Quiz