import React from 'react';
import styles from '@/styles/sdm.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const SDM = () => {
  return (
    <div className={styles.sdmPage}>
      <div className={styles.sdmCont}>
        <div className={styles.studio}>
          <Image src="/img/SDM/Group38.png" width={100} height={100} alt='' ></Image>
          <Link href="/studio">studio</Link>
        </div>
        <div className={styles.makeup}>
        <Image src="/img/SDM/Group47.png" width={100} height={100} alt='' ></Image>
          <Link href="/makeup">makeup</Link>
        </div>
        <div className={styles.dress}>
        <Image src="/img/SDM/Group48.png" width={100} height={100} alt='' ></Image>
          <Link href="/dress">dress</Link>
        </div>
      </div>
    </div>
  )
}

export default SDM