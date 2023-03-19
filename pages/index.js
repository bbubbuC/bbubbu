
import styles from '@/styles/main.module.scss'
import Link from 'next/link'
import Weather from './component/main/Weather'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'
import Intro from './component/main/Intro'
import Swal from "sweetalert2";

export default function Home() {

  const [introShown, setIntroShown] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(()=>{
    setTimeout(() => {
      if (status !== "authenticated") {
        Swal.fire({
          title: '로그인 후 이용해주세요!',
          text: '',
          imageUrl: 'https://ifh.cc/g/vGnSKW.png',
          imageWidth: 175,
          imageHeight: 150,
          imageAlt: 'Custom image',
          showCancelButton: false,
          confirmButtonText: '로그인 하러가기 👉',
          reverseButtons: true
        }).then(() => {
          router.push('/Login');
        })
      }
    }, 4000)
  },[status])

  useEffect(() => {
    const introSeen = getCookie('intro_seen');
    if (!introSeen) {
      setIntroShown(true);
      setCookie('intro_seen', 'true', 30); // 30일간 유지되는 쿠키
    }
  }, []);


  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const [cookieName, cookieValue] = cookies[i].split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  }
  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }


  return (
      <div className={styles.back}>
        {introShown && <Intro />}
        <main className={styles.main}>
          <section className={styles.iconBox}>
            <div className={styles.icon02}></div>
            <div className={styles.icon01}></div>
            <div className={styles.icon03}></div>
          </section>


          <section className={styles.box01}>
            <div className={styles.introduce}>
              <div className={styles.weatherContainer}>
                <Weather/>
              </div>
            </div>
            <Link href="/Community">
              <div className={styles.community}>
              </div>
            </Link>
          </section>

           <section className={styles.box02}>
             <Link href="/CheckList">
               <div className={styles.checkList}></div>
             </Link>
            <Link href="/Invitation">
               <div className={styles.invitation}></div>
             </Link>
             <Link href="/Quiz">
               <div className={styles.quiz}></div>
             </Link>
            <Link href="/SDM">
               <div className={styles.sdm}></div>
             </Link>
           </section>
         </main>
       </div>
  )
}



