import React, { useRef } from 'react'
import styles from '@/styles/checkList.module.scss'
import Image from 'next/image'

const CheckList = () => {

  const note = useRef();

  return (
    <>
      <div className="H1">CHECK LIST</div>
      {/* <h1 style={{color:"red"}}>sdsad</h1> */}
      <section ref={note} className={styles.note}>
        <form>
          <input type="text" className={styles.textInput}/>
          <input type="submit" value="등록" className={styles.submitInput}/>
        </form>

        <div className={styles.textBox}>

          <div className={styles.textList}>
            <div className={styles.check}>
              <input type="checkbox"/>
              <p>sdasds일들sdasdsaddagifu해얗ㄹ 일들</p>
            </div>
            <div className={styles.btnBox}>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>

        </div>


        <div className={styles.buttonBox}>
          <button onClick={()=>{note.current.style="background:#FFFDC7"}}></button>
          <button onClick={()=>{note.current.style="background:#FFD1C7"}}></button>
          <button onClick={()=>{note.current.style="background:#E2FFE5"}}></button>
          <button onClick={()=>{note.current.style="background:#ade5ec"}}></button>
          <button onClick={()=>{note.current.style="background:#D8C1FF"}}></button>
          <button onClick={()=>{note.current.style="background:#FFFFFF"}}></button>
        </div>

      </section>

      

      <div className={styles.line}>
        <Image src="/img/main/line.png" alt='' width={280} height={160}/>
      </div>
    </>
  )
}

export default CheckList