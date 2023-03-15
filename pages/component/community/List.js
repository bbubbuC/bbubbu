
import Image from 'next/image'
import styles from '@/styles/community.module.scss'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState, useRef } from 'react'
import { DbContext } from '../MyContext';

const List = () => {
    const { data, dataFun } = useContext(DbContext);
    const router = useRouter();
    const [like, setLike] = useState(0);
    const [commentBox, setCommentBox] = useState(false)

    console.log(data);
    function dataget() {
        dataFun('get')
    }

    function dataDelete(id) {
        dataFun('delete',id)
        window.location.reload();
    }

    // const changeImg = () => {
    //     setLike(!like)
    //     console.log(like)
    // }

    // const likeUpdate = () => {
    //     console.log(obj)
    //     const newLikeB = obj.likeB === 0 ? 1 : 0;
    //     dataFun('put', { likeB: newLikeB });
    // }

    useEffect(dataget,[])
    return (
        <>
            <div>
                <section>
                    {
                        data && data.map(obj => (
                            <div key={obj.id} className={styles.listBox}>
                                <div className={styles.top}>
                                    <div className={styles.profile}>
                                        {/* <Image src="/img/signup/2.png" alt='' width={40} height={40}/> */}
                                        <img src={obj.profile}/>
                                        <div className={styles.nickname}>
                                            <b>{obj.nickname}</b>
                                            <p>{obj.date}</p>  
                                        </div>
                                    </div>
                                    <div className={styles.BTN}>
                                        <button onClick={() => router.push({ pathname: '/Update', query: obj })}>
                                            <Image  src="/img/community/edit.png" alt='' width={28} height={25}/>
                                        </button>
                                        <button onClick={() => dataDelete(obj.id)}>
                                            <Image  src="/img/community/delete.png" alt='' width={28} height={28}/>
                                        </button>
                                    </div>
                                </div>
    
                                <div className={styles.middle}>
                                    <h4>{obj.title}</h4>
                                    <p>{obj.text}</p>
                                </div>
                                <div className={styles.bottom}>
                                    <div className={styles.bottom01}>
                                        <b onClick={() => {setCommentBox(!commentBox)}}>
                                            {commentBox ?  "닫기" : "댓글" }
                                        </b>
                                        <div>
                                        <button onClick={() => { dataFun('put', {id:obj.id, icon1: obj.icon1 = "1"}) }}>
                                                <Image src="/img/community/icon06.png" alt='' width={20} height={20}/>
                                                <p>{obj.num1}</p>
                                            </button>
                                            <button>
                                                <Image src="/img/community/icon11.png" alt='' width={20} height={20}/>
                                                <p>{obj.num2}</p>
                                            </button>
                                            <button>
                                                <Image src="/img/community/icon13.png" alt='' width={20} height={20}/>
                                                <p>{obj.num3}</p>
                                            </button>
                                            <button>
                                                <Image src="/img/community/icon14.png" alt='' width={20} height={20}/>
                                                <p>{obj.num4}</p>
                                            </button>  
                                        </div>
                                    </div>
  
                                    <button onClick={() => { 
                                        dataFun('put', {id:obj.id, likeB: obj.likeB === 0 ? 1 : 0, nickname: obj.nickname, text: obj.text }) 
                                        }} 
                                        className={styles.like}
                                    >
                        
                                        {
                                            obj.likeB === 0
                                            ? 
                                                <Image  src="/img/community/w.png" alt='' width={28} height={26}/>
                                            :
                                                <Image  src="/img/community/r.png" alt='' width={28} height={26}/>
                                        }
                                    </button>
                                </div>
                                { 
                                    commentBox && 
                                    (
                                        <div className={styles.comment}>
                                            <div className={styles.commentInput}> 
                                                <input/>
                                                <button>
                                                    <Image  src="/img/community/send.png" alt='' width={25} height={23}/>
                                                </button>
                                            </div>
                                            <div className={styles.profileC}>
                                                <div className={styles.profileCC}>
                                                    <img src="obj.commentProfile"/>
                                                    <p>obj.commentName</p>
                                                </div>
                                                <p>obj.comment</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ))


                    }
                    
        

                </section>
            </div>
        </>
    )
}

export default List

