
import Image from 'next/image'
import styles from '@/styles/community.module.scss'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState, useRef } from 'react'
import { DbContext } from '../MyContext';

const List = () => {
    const { data, dataFun, like, likeFun, userInfo} = useContext(DbContext);
    const router = useRouter();
    const [commentBox, setCommentBox] = useState(false);
    const [filterU, setFilterU] = useState([]);
   
    const filterUFun = () => {
        const filteredLikes = like.filter((likeU) => {
            return likeU.user === userInfo?.nickname;
        });
        setFilterU(filteredLikes);
    };
    
     async function dataget() {
        dataFun('get');
        likeFun('get');
        filterUFun();
    }

    function dataDelete(id) {
        dataFun('delete',id)
    }

    useEffect(()=> { dataget()},[])
    useEffect(()=> { filterUFun();},[like])

    //표정 버튼
    // function pop (e) {
    //     let amount = 10;
    //     switch (e.target.dataset.type) {
    //       case 'shadow':
    //       case 'line':
    //         amount = 15;
    //         break;
    //     }
      
    //     if (e.clientX === 0 && e.clientY === 0) {
    //       const bbox = e.target.getBoundingClientRect();
    //       const x = bbox.left + bbox.width / 2;
    //       const y = bbox.top + bbox.height / 2;
    //       for (let i = 0; i < 10; i++) {
    //         createParticle(x, y, e.target.dataset.type);
    //       }
    //     } else {
    //       for (let i = 0; i < amount; i++) {
    //         createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
    //       }
    //     }
    //   }
    //   function createParticle (x, y, type) {
    //     const particle = document.createElement('particle');
    //     document.body.appendChild(particle);
    //     let width = Math.floor(Math.random() * 10 + 8);
    //     let height = width;
    //     let destinationX = (Math.random() - 0.5) * 200;
    //     let destinationY = (Math.random() - 0.5) * 200;
    //     let rotation = Math.random() * 520;
    //     let delay = Math.random() * 200;
        
    //     switch (type) {
      
    //       case 'mario':
    //         particle.style.backgroundImage = 'url(/img/community/icon06.png)';
    //         break;
    //     }
        
    //     particle.style.width = `${width}px`;
    //     particle.style.height = `${height}px`;
    //     const animation = particle.animate([
    //       {
    //         transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
    //         opacity: 1
    //       },
    //       {
    //         transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
    //         opacity: 0
    //       }
    //     ], {
    //       duration: Math.random() * 1000 + 5000,
    //       easing: 'cubic-bezier(0, .9, .57, 1)',
    //       delay: delay
    //     });
    //     animation.onfinish = removeParticle;
    //   }
    //   function removeParticle (e) {
    //     e.srcElement.effect.target.remove();
    //   }
      
    //   if (document.body.animate) {
    //     document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
    //   }
      
    return (
        <>
            {/* <button data-type="mario">Mario particles</button> */}
            <div>
                <section>
                    {
                        data && data.map(obj => (
                            <div key={obj.id} className={styles.listBox}>
                                <div className={styles.top}>
                                    <div className={styles.profile}>
                                        <img src={obj.profile}/>
                                        <div className={styles.nickname}>
                                            <b>{obj.nickname}</b>
                                            <p>{obj.date}</p>  
                                        </div>
                                    </div>

                                    {
                                        obj.nickname === userInfo?.nickname ?
                                            <div className={styles.BTN}>
                                                <button onClick={() => router.push({ pathname: '/Update', query: obj })}>
                                                    <Image  src="/img/community/edit.png" alt='' width={28} height={25}/>
                                                </button>
                                                <button onClick={() => dataDelete(obj.id)}>
                                                    <Image  src="/img/community/delete.png" alt='' width={28} height={28}/>
                                                </button>
                                            </div>
                                        :
                                            null
                                    }
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

                                    {
                                        filterU.find((h) => h.communityId == obj.id) ? (
                                            <button onClick={() => {
                            
                                                likeFun('delete', {params :{communityId:obj.id, user: userInfo.nickname}}); }} className={styles.like}
                                            >
                                                <Image  src="/img/community/r.png" alt='' width={28} height={26}/>
                                            </button>
                                        ) : (
                                            <button onClick={() => { 
                                                console.log('sdfsdfsdfsdfsdfsd2322232232')
                                                likeFun('post', {communityId:obj.id, user: userInfo.nickname, likeB:1 }); }} className={styles.like}
                                               
                                            
                                            >
                                                <Image  src="/img/community/w.png" alt='' width={28} height={26}/>               
                                            </button>
                                        )
                                    }

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
                                                    <img src="/img/signup/1.png"/>
                                                    <p>동동</p>
                                                </div>
                                                <p>댓글</p>
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

