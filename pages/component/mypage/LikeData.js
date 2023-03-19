import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/mypage.module.scss'
import { DbContext } from '../MyContext'

const LikeData = () => {
  const {userInfo, data, like} = useContext(DbContext);
  const [likeData,setLikeData] = useState([]);
  
  function t(){
    const test = [];
    const tt =like.filter((obj) => {
      return obj.user === userInfo.nickname;
    })
    tt.map((obj)=>(
      data.map((oobj)=>{
        if(obj.communityId == oobj.id){
          return test.push(oobj)
        }
      })
    ))
    setLikeData(test);
  }

  useEffect(()=>{
    t()
  },[])
  return (
    <div className={styles.flexmy}>
    {
      likeData.map((item,key)=>(
        <div className={styles.content} key={key}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>  
        </div>
      ))
    }
    </div>
  )
}

export default LikeData