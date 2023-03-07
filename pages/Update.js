
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { DbContext } from './component/MyContext';

const Update = () => {
    const {dataFun} = useContext(DbContext);
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

    // if (!initial) {
    //     return <div>데이터를 불러오는 중입니다.</div>;
    // }

    return (
        <div>
            <div className="H1">EDIT</div>
            <form onSubmit={create}>
                <p><input value={inputValue.nickname} onChange={valueChange} type="text" placeholder='이름' name="nickname" /></p>
                {/* <p><input value={inputValue.date} onChange={valueChange} type="date" placeholder='d' name="date"/></p> */}
                <p><input value={inputValue.text} onChange={valueChange} type="text" placeholder='글' name="text"/></p>
                <p><input type="submit" value="저장" /></p>
            </form>
        </div>
    )
}

export default Update