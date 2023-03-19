import React from 'react'
import styles from '../../../styles/main.module.scss'
import Image from 'next/image'

const Intro = () => {
  return (
    <>
        <div className={styles.intro}>
            <Image className={styles.hartA} src="/img/intro/hart4.png" width={220} height={220} alt='' ></Image>
            <Image className={styles.hartB} src="/img/intro/hart6.png" width={250} height={250} alt='' ></Image>
            <Image className={styles.hartD} src="/img/intro/hart4.png" width={250} height={250} alt='' ></Image>
            <Image className={styles.hartE} src="/img/intro/hart5.png" width={200} height={200} alt='' ></Image>
            <Image className={styles.hartF} src="/img/intro/logobbubbu.png" width={640} height={230} alt='' ></Image>
            <Image className={styles.hartG} src="/img/intro/hart6.png" width={250} height={250} alt='' ></Image>
            <Image className={styles.hartH} src="/img/intro/hart6.png" width={320} height={320} alt='' ></Image>
            <Image className={styles.hartI} src="/img/intro/hart5.png" width={200} height={200} alt='' ></Image>
            <Image className={styles.hartJ} src="/img/intro/hart4.png" width={500} height={500} alt='' ></Image>
            <Image className={styles.hartK} src="/img/intro/hart6.png" width={250} height={250} alt='' ></Image> 
            <Image className={styles.hartL} src="/img/intro/hart6.png" width={400} height={400} alt='' ></Image>
            <Image className={styles.hartM} src="/img/intro/hart5.png" width={120} height={120} alt='' ></Image>
            <Image className={styles.hartN} src="/img/intro/hart6.png" width={140} height={140} alt='' ></Image>
            <Image className={styles.hartP} src="/img/intro/hart6.png" width={180} height={180} alt='' ></Image>
            <Image className={styles.hartQ} src="/img/intro/hart4.png" width={140} height={140} alt='' ></Image>
            <Image className={styles.hartS} src="/img/intro/hart4.png" width={180} height={180} alt='' ></Image>
        </div>
    </>
  )
}

export default Intro