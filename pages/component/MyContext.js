import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const DbContext = createContext(null);

const MyContext = ({children}) => {

    const [data,setData] = useState();

    async function dataFun(type,obj){
        let trans;
        if(type=='get'){
            await axios.get('/api').then(res=>trans = res.data)
        }else if(type=='post'){
            await axios.post('/api',obj)
            return dataFun('get');
        }else if(type=='put'){
            await axios.put(`/api/${obj.id}`, obj).then((res)=>{
                console.log(res);
            })
            return dataFun('get');
        }else{
            await axios.delete(`/api/${obj}`)
            return dataFun('get');
        }
        //console.log(trans);
        setData(trans);
    }
    useEffect(()=>{
        dataFun('get')
    },[])

    return (
        <DbContext.Provider value={{data,dataFun}}>
            {children}
        </DbContext.Provider>
    )
}

export default MyContext