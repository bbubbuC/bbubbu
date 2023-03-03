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
        <input type="text"/>
        <input type="submit" value="등록"/>

        <div className={styles.buttonBox}>
          <button onClick={()=>{note.current.style="background:#FFFDC7"}}></button>
          <button onClick={()=>{note.current.style="background:#FFD1C7"}}></button>
          <button onClick={()=>{note.current.style="background:#E2FFE5"}}></button>
          <button onClick={()=>{note.current.style="background:#BAF3FB"}}></button>
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