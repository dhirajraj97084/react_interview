import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../../component/layout/Layout';

function Electronics() {
    const [data, setData] = useState([]);

    const getProduct=async()=>{
       const res=await axios.get('https://fakestoreapi.com/products/category/electronics');
       //console.log(res.data)
       setData(res.data);
    }

    useEffect(()=>{
        getProduct();
    },[])
  return (
    <Layout>
      <h1 className='flex justify-center py-4 text-3xl font-bold'>My Electronics Products</h1>
      <div className="product">
        <div className="main grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item ,index)=>{
                return (
                    <div key={index} className="div  ">
                        <div className="inner p-4 m-2  bg-slate-400 rounded-xl">
                            <img className=' rounded-xl mx-auto' src={item.image} alt="img" />
                           <h1>{item.title}</h1> 
                           <p>{item.category}</p>
                           <p>{item.price}</p>
                           <p>{item.rating.rate}</p>
                           <p></p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default Electronics
