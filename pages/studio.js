
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import styles from '@/styles/studio.module.scss';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import StudioCom from './component/StudioCom';



function studio() {

    const studioList = [
        {
            id: 1,
            studioName: "구호스튜디오",
            time: "09:00~19:00",
            url: "/img/SDM/studio/구호스튜디오/1.jpg",
            src: "http://www.kuhostudio.co.kr/",
            adress: "성동구 아차산로15길 47-38 / 하이엔드 : 성동구 광나루로 294-4",
            call: "0504-0536-0706"
        },
        {
            id: 2,
            studioName: "그날의기억",
            time: "09:00~19:00",
            url: "/img/SDM/studio/그날의기억/1.jpg",
            src: "http://www.dellastudio.kr",
            adress: "서울 강남구 청담동 80-4 송제빌딩 B2",
            call: "02-517-9457"
        },
        {
            id: 3,
            studioName: "달빛스쿠터",
            time: "09:00~19:00",
            url: "/img/SDM/studio/달빛스쿠터/1.jpg",
            src: "https://www.dalsstudio.com/",
            adress: "서울 강남구 논현동 125-9 NSH빌딩",
            call: "0504-0536-0725"
        },
        {
            id: 4,
            studioName: "더브라이드 스튜디오",
            time: "09:00~19:00",
            url: "/img/SDM/studio/더브라이드 스튜디오/1.jpg",
            src: "https://www.dalsstudio.com/",
            adress: "서울 송파구 오금로 152 (송파동, 연세빌딩) 6층",
            call: "02-417-4377"

        },
        {
            id: 5,
            studioName: "더청담스튜디오",
            time: "09:00~19:00",
            url: "/img/SDM/studio/더청담스튜디오/2.png",
            src: "http://www.thechungdamstudio.com",
            adress: "서울 강남구 도산대로 510 (청담동, 신한 오피스텔) 지하1층/ 청담스튜디오",
            call: "02-3444-4155"
        },
        {
            id: 6,
            studioName: "라리스튜디오",
            time: "09:00~19:00",
            url: "/img/SDM/studio/라리스튜디오/3.jpg",
            src: "http://rari.co.kr/",
            adress: "서울 강남구 청담동 89-4 8F, 7F, 6F, B1",
            call: "0504-0536-0689"
        },
        {
            id: 7,
            studioName: "라망스튜디오",
            time: "09:00~19:00",
            url: "/img/SDM/studio/라망스튜디오/1.jpg",
            src: "http://www.visualcompanylnc.com",
            adress: "서울 강남구 도산대로66길 43 B1층",
            call: "0504-0536-0674"
        },

    ]






    return (
        <div className={styles.studio}>

            <div className={styles.logo}>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
                <p>STUDIO</p>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
            </div>

            <div className={styles.recommendStudio}>
                <div className={styles.recommendStudioLogo}>
                    <Image src="/img/SDM/Group 90.png" width={30} height={30} alt='' ></Image>
                    <p>추천 스튜디오</p>
                </div>

                {/* <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={5}
                    // autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={styles.cont}

                >
                    {studioList.map((v, k) => {
                        return (

                            <SwiperSlide key={k} className={styles.SwiperSlide}>
                                <StudioCom value={v} studioName={v.studioName}></StudioCom>
                            </SwiperSlide>
                        )
                    })}
                </Swiper > */}

                <div>
                    {studioList.map((v, k) => {
                        return (
                            <div key={k} className={styles.SwiperSlide}>
                                <StudioCom value={v} studioName={v.studioName} src={v.src} url={v.url}></StudioCom>
                            </div>
                        )
                    })}
                </div>

            </div >


            {/* 영상 */}
            <div div className={styles.videoPlayer} >
                <div className={styles.videoPlayerLogo}>
                    <Image src="/img/SDM/Group 90.png" width={30} height={30} alt='' ></Image>
                    <p>관련 영상</p>
                </div>

                <div className={styles.player}>
                    <div id='player' >
                        <YouTube
                            videoId={"0E3_EXhnp5M"}
                            opts={{
                                width: "486",
                                height: "284",
                                playerVars: {
                                    autoplay: 0, //자동재생 O
                                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                                },
                            }}
                            onEnd={(e) => { e.target.stopVideo(0); }}
                        />
                    </div>
                    <div id='player'>
                        <YouTube
                            videoId={"sbnjKIeKEL4"}
                            opts={{
                                width: "486",
                                height: "284",
                                playerVars: {
                                    autoplay: 0, //자동재생 O
                                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                                },
                            }}
                            onEnd={(e) => { e.target.stopVideo(0); }} />
                    </div>
                    <div id='player'>
                        <YouTube
                            videoId={"e9uYIS-S8Ew"}
                            opts={{
                                width: "486",
                                height: "284",
                                playerVars: {
                                    autoplay: 0, //자동재생 O
                                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                                },
                            }}
                            onEnd={(e) => { e.target.stopVideo(0); }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default studio

