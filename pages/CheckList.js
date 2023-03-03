import React from 'react'
import styles from '@/styles/checkList.module.scss'
import Image from 'next/image'

const CheckList = () => {
  return (
    <>
      <div className="H1">CHECK LIST</div>

      <section className={styles.note}>
        <input type="text"/>
        <input type="submit" value="등록"/>

        <div className={styles.buttonBox}>
          <button onClick={()=>{}}></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>

      </section>

      

      <div className={styles.line}>
        <Image src="/img/main/line.png" alt='' width={280} height={160}/>
      </div>
    </>
  )
}

export default CheckList