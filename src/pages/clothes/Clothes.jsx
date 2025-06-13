import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../../component/layout/Layout';

function Clothes() {
const [data, setData] = useState([]);


const getProduct=async()=>{
   const res=await axios.get('https://fakestoreapi.com/products');
   console.log(res.data);
   setData(res.data);
}

useEffect(()=>{
  getProduct();
},[])

  return (
    <Layout>
     <h1 className='flex justify-center text-3xl font-bold py-3'>Clothes</h1>
     <div className="main">
        <div className="sub">
           <div className="inner grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
             {data.map((item,index)=>{
                return (
                    <div key={index} className="div m-2 p-3 bg-slate-200 shadow-md rounded-xl">
                        <img className='rounded-md h-56 w-full' src={item.image} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                    </div>
                )
             })}
           </div>
        </div>
     </div>
    </Layout>
  )
}

export default Clothes
