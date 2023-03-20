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

function makeup() {
    const makeupList = [
        {
            id: 1,
            studioName: "메이븐바이범호",
            time: "평일 10:00 - 06:30 / 주말,공휴일 10:00 - 07:30",
            url: "/img/SDM/makeup/메이븐바이범호/4-1.jpg",
            src: "https://www.instagram.com/mavenbybumho_wedding",
            adress: "서울 강남구 삼성로 715 (청담동) 1층",
            call: "02-542-3377"
        },
        {
            id: 2,
            studioName: "꾸띠원",
            time: "평일 10:00 - 19:00 /매주 월요일 휴무",
            url: "/img/SDM/makeup/꾸띠원/3.png",
            src: "http://instargram.com/cutee.one_wedding",
            adress: "서울 강남구 도산대로53길 39 3F (신사동, 신사동 C/K빌딩) 꾸띠원(cutee_one)",
            call: "0504-0536-1097"
        },
        {
            id: 3,
            studioName: "김선진끌로에",
            time: "AM 10:00 - PM6:30",
            url: "/img/SDM/makeup/진선진끌로에/1.jpg",
            src: "https://cloe.kr",
            adress: "건물앞 발렛파킹(4000원)/7호선 청담역 9번 도보7분",
            call: "0504-0536-1034"
        },
        {
            id: 4,
            studioName: "김활란뮤제네프",
            time: "매일 10:00 - 19:00 / 매주 월요일 휴무",
            url: "/img/SDM/makeup/김활란뮤제네프/1.jpg",
            src: "https://www.museeneuf.co.kr",
            adress: "서울 강남구 압구정로72길 14-4 (청담동) 뮤제네프",
            call: "070-8018-8891"
        },
        {
            id: 5,
            studioName: "알루본점",
            time: "-",
            url: "/img/SDM/makeup/알루본점/2.png",
            src: "-",
            adress: "서울 강남구 선릉로146길 15 (청담동, 이에스빌딩) 알루",
            call: "0504-0536-1059"
        },
        {
            id: 5,
            studioName: "끌림",
            time: "-",
            url: "/img/SDM/makeup/끌림/2.png",
            src: "-",
            adress: "서울 강남구 청담동 89-8 위빌딩 3층",
            call: "0504-0536-0910"
        },
        {
            id: 6,
            studioName: "스타일플로어",
            time: "오전 10시 ~ 오후6시 / 매주 월요일 휴무",
            url: "/img/SDM/makeup/스타일플로어/2.jpg",
            src: "https://blog.naver.com/rarapm04",
            adress: "서울특별시 강남구 도산대로81길 33-2",
            call: "02-542-1005"
        },
        {
            id: 7,
            studioName: "제이바이로이스타",
            time: "평일 9:30~18:00/매주 월요일 휴무",
            url: "/img/SDM/makeup/제이바이로이스타/2.jpg",
            src: "http://jbyloistaa.com/",
            adress: "서울 강남구 선릉로135길 4 (논현동) N빌딩 1층 제이바이로이스타",
            call: "0504-0536-1065"
        },
        {
            id: 8,
            studioName: "플리페",
            time: "평일10:00~19:00 월요일 정기휴무 (사전예약은 가능)",
            url: "/img/SDM/makeup/플리페/1.jpg",
            src: "http://brandm.co.kr/",
            adress: "서울특별시 강남구 영동대로129길 24-6",
            call: "02-548-7473"
        },

    ]
    return (
        <div className={styles.studio}>

            <div className={styles.logo}>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
                <p>MAKEUP</p>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
            </div>

            <div className={styles.recommendStudio}>
                <div className={styles.recommendStudioLogo}>
                    <Image src="/img/SDM/Group 90.png" width={30} height={30} alt='' ></Image>
                    <p>추천 메이크업샵</p>
                </div>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={5}
                    // autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={styles.cont}

                >
                    {makeupList.map((v, k) => {
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
                            videoId={"fX1At4bCREY"}
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
                            videoId={"2JaJM5NBMP8"}
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
                            videoId={"e0-MONKrcxY"}
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

export default makeup