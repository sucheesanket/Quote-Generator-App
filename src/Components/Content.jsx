import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Content = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/quotes").then((res)=>{
            setData(res.data.quotes);
        }).catch((err)=>{
            console.log(err);
            
        })

    },[]);



  return (
    <div className='p-7 flex flex-wrap gap-3 bg-gradient-to-br from-emerald-400 to-teal-600
'>

        {data.map((item)=>(

            <Card key={item.id} quote={item.quote} author={item.author}/>

        ))}

      
    </div>
  )
}

export default Content
