import React, { useRef, useState } from 'react'
import styles from '@/styles/invitation.module.scss'
import Image from 'next/image'

const invitation = () => {

  const frame = useRef();
  const [inputValue, setValue] = useState('');
  const [addedValues, setAddedValues] = useState([]);


  const changeFrame = (e) => {
    let newFrame = e.target.src;
    frame.current.src= newFrame;
  }


  const valueChange = (e) => {
    setValue(e.target.value)
  }

  const addValue = () => {
    setAddedValues([...addedValues, inputValue]);
    setValue('');
  }


  return (
    <>
      <div className="H1">청첩장만들기</div>

      <section className={styles.mainImg}>
        
        <div >
          <Image className={styles.frame} ref={frame}  alt='' width={593} height={593}/>
          <Image src="/img/invitation/p.png" alt='' width={593} height={593}/>
        </div>
      </section>

      <section>
        <h4>프레임 선택</h4>
        <div>
          <Image onClick={changeFrame} src="/img/invitation/f01.png" alt='' width={150} height={150}/>
          <Image onClick={changeFrame} src="/img/invitation/f04.png" alt='' width={150} height={150}/>
          <Image onClick={changeFrame} src="/img/invitation/f03.png" alt='' width={150} height={150}/>
          <Image onClick={changeFrame} src="/img/invitation/f04.png" alt='' width={150} height={150}/>
          <Image onClick={changeFrame} src="/img/invitation/f01.png" alt='' width={150} height={150}/>
          <Image onClick={changeFrame} src="/img/invitation/f04.png" alt='' width={150} height={150}/>
        </div>
      </section>

      <section>
        <h4>문구 작성하기</h4>
        <div>
          <input onChange={valueChange} value={inputValue} type="text" />
          <button onClick={addValue}>글 추가</button>
        </div>

        <div className={styles.inputBox}>
          <ul>
            {addedValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h4>사진 업로드</h4>
        <input type="file" />
      </section>

      <section>
        <h4>스티커 붙이기</h4>
        <div className={styles.iconBox}>
          <Image src="/img/main/icon01.png" alt='' width={45} height={45}/>
          <Image src="/img/main/icon02.png" alt='' width={45} height={45}/>
          <Image src="/img/main/icon04.png" alt='' width={45} height={45}/>
        </div>
      </section>

      
    </>
  )
}

export default invitation