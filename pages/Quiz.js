import React, { useRef, useState } from 'react'
import styles from '@/styles/quiz.module.scss'

const Quiz = () => {
  const [bg,setBg]=useState(true);
  const [collect,setCollect]=useState([]);
  const data = require('public/data/data.json')

  console.log(data[0].title);
function addData(e) {
  console.log(e.target.id)
  setCollect(enter => [...enter, e.target.id])

}
console.log(collect)

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
            <h2>{data[quizNumber].title}</h2>
            <button onClick={}>{data[quizNumber].answera}</button>
            <button onClick={}>{data[quizNumber].answerb}</button>
          </section>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </main>
  )
}

export default Quiz