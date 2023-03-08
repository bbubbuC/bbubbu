
import { useRouter } from 'next/router'
import React, { useContext, useState,  useEffect } from 'react'
import { DbContext } from './component/MyContext';
import styles from '@/styles/community.module.scss'
import Image from 'next/image'

const Update = () => {
    const {dataFun} = useContext(DbContext);
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();
    const { query } = router;


    let initial = { id: query.id, nickname: query.nickname, text: query.text}
    const [inputValue, setValue] = useState(initial);

    function valueChange(e) {
        let t = e.target;
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }
    function create(e) {
        e.preventDefault()
        dataFun('put',{...inputValue })
        router.push('/Community');
    }

    const images = [
        '/img/community/icon06.png',
        '/img/community/icon11.png',
        '/img/community/icon12.png',
        '/img/community/icon13.png',
        '/img/community/icon14.png'
    ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImage(currentImage => (currentImage + 1) % images.length)
    //     }, 1200)
    //     return () => clearInterval(interval)
    // }, [])


    return (
        <div>
            <div className="H1" style={{marginBottom:"80px"}} >EDIT</div>
            
            <div className={styles.bg01}>
                <Image src="/img/community/communitybg.png" alt='' width={400} height={160}/>
            </div>
            <div className={styles.bg02}>
                <Image src="/img/community/communitybg.png" alt='' width={400} height={160}/>
            </div>
            
            <article className={styles.container} style={{height:"55vh"}}>
                
                <form onSubmit={create}>
                    <input 
                        className={styles.title}
                        value={inputValue.nickname} 
                        onChange={valueChange} 
                        type="text" 
                        name="nickname" 
                    />
                    <textarea 
                        className={styles.text}
                        value={inputValue.text} 
                        onChange={valueChange} 
                        type="text" 
                        name="text"
                    />
                    <input 
                        className={styles.submit}
                        type="submit" 
                        value="수정" 
                    />
                </form>

                <div className={styles.sidebarW}> 
                    <button 
                        className={styles.slide} 
                        onClick={()=> {router.push("/Community")}}
                    >
                        돌아가기
                    </button>
                    <div className={styles.sidebarI}>
                    <Image src="/img/community/icon06.png" alt='' width={60} height={60}/>
                    </div>
                </div>

            </article>

        </div>
    )
}

export default Update