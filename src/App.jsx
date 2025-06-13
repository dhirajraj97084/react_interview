import React from 'react'
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import Home from './pages/home/Home'
import NoPage from './pages/noPage/NoPage'
import Electronics from './pages/electronics/Electronics'
import Clothes from './pages/clothes/Clothes'
import UseState from './component/hooks/useState'

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/usestate' element={<UseState/>} />
         <Route path='/electronics' element={<Electronics/>} />
        <Route path='/clothes' element={<Clothes/>} />
        <Route path='/*' element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
