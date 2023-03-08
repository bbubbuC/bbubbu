import React, { useRef, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/checkList.module.scss'
import Image from 'next/image'
import { DbContext } from './component/MyContext';

const CheckList = () => {

  const { todoData, todoDataFun } = useContext(DbContext);
  const initial = { todo: '' };
  const [inputValue, setInputValue] = useState(initial);
  const [editingId, setEditingId] = useState(null);


  function dataEdit(id) {
    const todo = todoData.find(obj => obj.id === id);
    setInputValue({ todo });
    setEditingId(id);
  }

  const edit = (e) => {
    e.preventDefault();
    todoDataFun('put', { id: editingId, todo: inputValue.todo });
    setInputValue(initial);
    setEditingId(null);
  }


  return (
    <>
      <section className={styles.note}>
        <form onSubmit={editingId !== null ? edit : create}>
          <input 
            type="text" 
            className={styles.textInput}
            onChange={valueChange} 
            value={inputValue.todo}
            placeholder='결혼식 전 체크리스트를 작성해주세요!' 
            name="todo" 
          />
          <input 
            type="submit" 
            value={editingId !== null ? "수정" : "등록"} 
            className={styles.submitInput}
          />
        </form>

        <div className={styles.textBox}>
          {
            todoData && todoData.map(obj => (
              <div key={obj.id} className={styles.textList}>
                <div className={styles.check}>
                  <input type="checkbox"/>
                  <p>{obj.todo}</p>
                </div>
                <div className={styles.btnBox}>
                  <button onClick={() => dataEdit(obj.id)}>수정</button>
                  <button onClick={() => dataDelete(obj.id)}>삭제</button>
                </div>
              </div>    
            ))
          }
        </div>

      </section>

    </>
  )
}

export default CheckList


// 위 코드에서는 editingId를 사용하여 현재 수정 중인 todo의 id를 저장합니다. 
// 수정 버튼을 누르면 dataEdit 함수가 호출되어 해당 todo의 값을 input에 채웁니다. 
// 수정 후에는 editingId와 inputValue를 초기화하여 
// 새로운 todo를 추가할 수 있도록 합니다.