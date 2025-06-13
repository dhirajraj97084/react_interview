import React, { useEffect } from 'react'

import { ProductProvider } from '../../context/ProductContext'
import Card from '../../component/Card'
import toast from 'react-hot-toast'
import Layout from '../../component/layout/Layout';

function Home() {
  useEffect(()=>{
    toast("Welcome to my Home page",);
  });
  return (
    <Layout>
      <ProductProvider>      
     <Card/>    
    </ProductProvider>
    </Layout>
  )
}

export default Home
