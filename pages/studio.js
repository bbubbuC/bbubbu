
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function studio() {

    const router = useRouter();

    const studioList = [
        {
            id: 1,
            studioName: "구호스튜디오",
            // url: "/img/SDM/구호스튜디오/1.jpg"
        },
        {
            id: 2,
            studioName: "구호스튜디오",
            // url: "/img/SDM/구호스튜디오/1.jpg"
        },
        {
            id: 3,
            studioName: "구호스튜디오",
            // url: "/img/SDM/구호스튜디오/1.jpg"
        },
        {
            id: 4,
            studioName: "구호스튜디오",
            // url: "/img/SDM/구호스튜디오/1.jpg"
        },
        {
            id: 5,
            studioName: "구호스튜디오",
            // url: "/img/SDM/구호스튜디오/1.jpg"
        },

    ]


    return (
        <div className='studio'>
            <div className='logo'>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
                <p>STUDIO</p>
                <Image src="/img/SDM/Group38.png" width={50} height={50} alt='' ></Image>
            </div>
            <div>
                <p>추천 스튜디오</p>
                <ul>
                    <li>{studioList.map((v, k) => {
                        console.log(v, k);
                    })}
                    </li>
                </ul>
            </div>
            <div>
                <p>관련 영상</p>
            </div>
        </div>
    )
}

export default studio


{/* <div className='recommend'>
                <p>추천 스튜디오</p>
                <div className='recommendCont'>
                    <Link href="/SDM" ><Image src="/img/SDM/studio/구호스튜디오/1.jpg" width={500} height={500} alt='' ></Image></Link>
                </div>
            </div>
            <div className='video'>
                <p>관련 영상</p>
            </div> */}
