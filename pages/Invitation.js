import React from 'react'
import styles from '@/styles/invitation.module.scss'
import Image from 'next/image'

const invitation = () => {
  return (
    <>
      <div className="H1">청첩장만들기</div>

      <section className={styles.mainImg}>
        <Image src="/img/invitation/s.png" alt='' width={590} height={590}/>
      </section>

      <section>
        <h4>프레임 선택</h4>
        <div>
          <Image src="/img/invitation/f01.png" alt='' width={150} height={150}/>
          <Image src="/img/invitation/f02.png" alt='' width={150} height={150}/>
          <Image src="/img/invitation/f03.png" alt='' width={150} height={150}/>
          <Image src="/img/invitation/f04.png" alt='' width={150} height={150}/>
          <Image src="/img/invitation/f01.png" alt='' width={150} height={150}/>
          <Image src="/img/invitation/f02.png" alt='' width={150} height={150}/>
        </div>
      </section>

      <section>
        <h4>문구 작성하기</h4>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
        <div className={styles.inputBox}></div>
      </section>

      <section>
        <h4>사진 업로드</h4>
        <input type="file" />
      </section>

      <section>
        <h4>스티커 붙이기</h4>
        <div className={styles.iconBox}>
          <Image src="/img/main/icon01.png" alt='' width={45} height={45}/>
          <Image src="/img/main/icon02.png" alt='' width={45} height={45}/>
          <Image src="/img/main/icon04.png" alt='' width={45} height={45}/>
        </div>
      </section>

      
    </>
  )
}

export default invitation