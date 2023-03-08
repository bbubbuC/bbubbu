import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const DbContext = createContext(null);

const MyContext = ({children}) => {

    const [data,setData] = useState();
    const [todoData,todoSetData] = useState();

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
        }else if (type === 'delete'){
            await axios.delete(`/api/${obj}`)
            return dataFun('get');
        }
        setData(trans);
    }

    async function todoDataFun(type,obj){
        let trans;
        if(type=='get'){
            await axios.get('/api/todo').then(res=>trans = res.data);
        }else if(type=='post'){
            await axios.post('/api/todo',obj)
            return todoDataFun('get');
        }else if(type=='put'){
            await axios.put(`/api/todo/${obj.id}`, obj).then((res)=>{
                console.log(res);
            })
            return dataFun('get');
        }else if (type === 'delete'){
            await axios.delete(`/api/todo/${obj}`)
            return todoDataFun('get');
        }
        console.log(trans)
        todoSetData(trans);
    }

    useEffect(()=>{
        dataFun('get');
        todoDataFun("get");
    },[])

    return (
        <DbContext.Provider value={{data,dataFun,todoData,todoDataFun}}>
            {children}
        </DbContext.Provider>
    )
}

export default MyContext