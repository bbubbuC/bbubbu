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

    const dressList = [{

    }]
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
                                    <StudioCom value={v} studioName={v.studioName}></StudioCom>
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

export default dress