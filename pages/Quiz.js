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
      <img src='/img/quiz/quizIntro.png' />
    </div>
  );
}

if (quizNum === 13) {
  return (
    <div className={styles.result}>
      <div className={styles.resultContainer}>
        <p>나의 취향은:</p>
        {
          collect.map((item, key) => (
          <p key={key}>{item}</p>))
        }
        <Link href="/Mypage">
            <img src='/img/quiz/rocket.png' />
          </Link>
      </div>
    </div>
  );
}
  return (
    <main className={styles.main}>
      <div className={styles.back}>
        <div className={bg?`${styles.container}`:`${styles.container} ${styles.noneContainer}`}>
          <section className={styles.start} >
            <p>Move to Quiz</p>
            <p>"Choose a better one"</p>
            <div className={styles.btn} onClick={() => setBg(false)}>
              <p>Get Started</p>
              <img className={styles.rocket} src='/img/quiz/rocket.png' />
              <img src='/img/quiz/rcloud.png' />
            </div>
          </section>
          <section className={styles.balance}>
            <h2>{data[quizNum].title}</h2>
            <button onClick={() => {addData(data[quizNum].answera);increaseQuizNum();if(quizNum === 12){showResults();}}}>{data[quizNum].answera}</button>
            <button onClick={() => {addData(data[quizNum].answerb);increaseQuizNum();if(quizNum === 12){showResults();}}}>{data[quizNum].answerb}</button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Quiz