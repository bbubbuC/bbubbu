import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router';
import { DbContext } from './component/MyContext';

const Write = () => {
    const {dataFun} = useContext(DbContext);
    const router = useRouter();

    var sampleTimestamp = Date.now();
    var date = new Date(sampleTimestamp); 
    var year = date.getFullYear().toString().slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var hour = ("0" + date.getHours()).slice(-2);
    var minute = ("0" + date.getMinutes()).slice(-2); 
    var returnDate = year + "-" + month + "-" + day + " " + hour + ":" + minute

    const initial = { nickname: '', text: '', date: returnDate };

    const [inputValue, setValue] = useState(initial);
    function valueChange(e) {
        let t = e.target;
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }
    function create(e) {
        e.preventDefault();
        dataFun('post',{...inputValue})
        router.push('/Community');
    }
    return (
        <>
            <div className="H1">WRITE</div>
            <div>
                <form onSubmit={create}>
                    <p><input onChange={valueChange} type="text" placeholder='이름' name="nickname" /></p>
                    <p><input onChange={valueChange} type="text" placeholder='연락처' name="text" /></p>
                    <p><input type="submit" value="저장" /></p>
                </form>
            </div>
        </>
    )
}

export default Write