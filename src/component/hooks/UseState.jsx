import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Layout from '../layout/Layout';



function UseState() {
  let [count, setCount] = useState(0);


  useEffect(() => {
    toast('i am render only 1st times');
  }, [])

  const increa = () => {
    setCount(count + 1);
    console.log(count);
  }
  const decrea = () => {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <Layout >
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className="div">
          <h1 className='text-3xl font-bold'>{count}</h1>
        </div>
        <div className="div flex gap-5 py-6">
          <button onClick={increa} className='px-6 py-2 rounded-xl bg-blue-700 text-white cursor-pointer hover:bg-blue-600'>increament</button>
          <button onClick={decrea} className='px-6 py-2 rounded-xl bg-blue-700 text-white cursor-pointer hover:bg-blue-600'>decreament</button>
        </div>
      </div>
    </Layout>
  )
}

export default UseState
