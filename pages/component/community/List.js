
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { DbContext } from '../MyContext';


const List = () => {
    const { data, dataFun } = useContext(DbContext);
    console.log(data);
    const router = useRouter();

    function dataget() {
        dataFun('get')
    }

    function dataDelete(id) {
        dataFun('delete',id)
        window.location.reload();
    }
    useEffect(dataget,[])
    return (
        <>
            <div>
                <ul>
                    {
                        data && data.map(obj => (
                            <li key={obj.id}>
                                {obj.nickname} / {obj.date} / {obj.text}
                                <button onClick={() => router.push({ pathname: '/Update', query: obj })}>수정</button>
                                <button onClick={() => dataDelete(obj.id)}>삭제</button>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default List

