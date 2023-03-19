import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/mypage.module.scss'
import { DbContext } from '../MyContext'

const MyData = () => {
  const {userInfo, data}= useContext(DbContext);
  const [myData,setMyData] = useState([]);

  //내가 쓴글
  const myDData = () => {
    const myDa = data.filter((obj) => {
        return obj.name === userInfo.name;
    });
    setMyData(myDa);
  };

  useEffect(()=>{
    myDData()
  },[])
  return (
    <div className={styles.flexmy}>
    {
      myData.map((item,key)=>(
        <div className={styles.content} key={key}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>  
        </div>
      ))
    }
    </div>
  )
}

export default MyData