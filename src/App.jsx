import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Blogs from './Component/Blogs/Blogs'

function App() {
  const [product,setProduct] =useState([])
  useEffect(()=>{

    fetch('product.json')
    .then(res => res.json())
    .then(data =>setProduct(data))

  
  },[])

  return (
   <>
   
   <div>
    <Navbar>

    </Navbar>

        <Banner></Banner>


        <div>
          <Blogs product={product}/>
        </div>
   </div>
   
   </>
  )
}

export default App
