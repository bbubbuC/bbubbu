import React from 'react'
import Image from 'next/image';
import YouTube from 'react-youtube';
import styles from '@/styles/studio.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import StudioCom from './component/StudioCom';

function dress() {

    const dressList = [
        {
            id: 1,
            studioName: "헤브드라마리에",
            time: "오전10 ~ 오후 7시 / 매주 일요일 월요일 휴무",
            url: "/img/SDM/dress/헤브드라마리에/1.png",
            src: "http://pf.kakao.com/_PehZs",
            adress: "서울 강남구 선릉로145길 5-13 (논현동) 3층",
            call: "02-6080-7266"
        },
        {
            id: 2,
            studioName: "더케네스블랑",
            time: "AM 10 : 00 ~ PM 19 : 00 / 매주월요일휴무",
            url: "/img/SDM/dress/더케네스블랑/1.jpg",
            src: "http://blog.naver.com/ccssyy5486",
            adress: "서울 강남구 삼성로 741 (청담동, 덕암빌딩) 3층",
            call: "0504-0536-0895"
        },
        {
            id: 3,
            studioName: "비비드블랑",
            time: "오전 10시~ 오후 7시 / 매주 일, 월 휴무",
            url: "/img/SDM/dress/비비드블랑/1.jpg",
            src: "http://www.bbdeblanc.com",
            adress: "서울 강남구 선릉로137길 5 (논현동) 1층 비비드블랑",
            call: "0504-0536-0945"
        },
        {
            id: 4,
            studioName: "우아르",
            time: "오전 10시~ 오후 7시 / 매주 일,월요일 휴무",
            url: "/img/SDM/dress/우아르/2.jpg",
            src: "-",
            adress: "서울 강남구 청담동 39-6 1F &B1F",
            call: "02-541-6548"
        },
        {
            id: 5,
            studioName: "벨에포크",
            time: "AM 10:00 - PM 08:00 SUNDAY MONDAY OFF",
            url: "/img/SDM/dress/벨에포크/2.jpg",
            src: "http://www.epoquewed.com",
            adress: "서울특별시 강남구 삼성로 771 2층 벨에포크 드레스샵",
            call: "0504-0536-0880"
        },
        {
            id: 5,
            studioName: "하우스오브에이미",
            time: "AM 10:00 - PM 8:00 (매주월요일, 일요일 OFF)",
            url: "/img/SDM/dress/하우스오브에이미/2.jpg",
            src: "http://WWW.HOUSEOFAMY.COM",
            adress: "서울 강남구 청담동 89-8 위빌딩 3층",
            call: "0504-0536-0910"
        },
        {
            id: 6,
            studioName: "레이첼웨딩",
            time: "오전10시~8시/매주 일요일, 월요일휴무,점심시간1시~2시까지",
            url: "/img/SDM/dress/레이첼웨딩/2.jpg",
            src: "-",
            adress: "강남구 도산대로54길17 삼원빌딩4층 4층레이첼웨딩",
            call: "0504-0536-089"
        },
        {
            id: 7,
            studioName: "페르테레이",
            time: "11:00~19:00 / 매주 일, 월요일 휴무",
            url: "/img/SDM/dress/페르테레이/2.jpg",
            src: "-",
            adress: "서울 강남구 청담동 99-2 2층 페르테레이",
            call: "0504-0536-0840"
        },
        {
            id: 8,
            studioName: "디유드라포엠",
            time: "AM 10:00 - PM 7:00 (일요일,월요일 휴무)",
            url: "/img/SDM/dress/디유드라포엠/2.jpg",
            src: "-",
            adress: "서울 강남구 청담동 91-5 4층 라포엠",
            call: "02-3443-1386"
        },

    ]
    return (
        <div className={styles.studio}>

            <div className={styles.logo}>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
                <p>DRESS</p>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
            </div>

            <div className={styles.recommendStudio}>
                <div className={styles.recommendStudioLogo}>
                    <Image src="/img/SDM/Group 90.png" width={30} height={30} alt='' ></Image>
                    <p>추천 드레스샵</p>
                </div>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={5}
                    // autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={styles.cont}

                >
                    {dressList.map((v, k) => {
                        return (
                            <>
                                <SwiperSlide key={k} className={styles.SwiperSlide}>
                                    <StudioCom value={v} url={v.url}></StudioCom>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper >
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
                            videoId={"Q1e1UYN-fOs"}
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
                            videoId={"DHz1XPu5m4I"}
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
                            videoId={"c4nQ2DpUYok"}
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

export default dress