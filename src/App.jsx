import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Blogs from './Component/Blogs/Blogs'
import BuyProduct from './Component/Buyer/BuyProduct'

function App() {
  const [product,setProduct] =useState([])
  const [fvtItem,setItem] =useState([])
  useEffect(()=>{

    fetch('product.json')
    .then(res => res.json())
    .then(data =>setProduct(data))

  
  },[])

  const handleFvt =(item) =>{
    setItem([...fvtItem,item])
  }

  const totalPrice =fvtItem.reduce((sum,total) => sum + total.price,0)

  return (
   <>
   
   <div>
    <Navbar>

    </Navbar>

        <Banner></Banner>

      <div className='flex '>

          <div className='w-[70%]'>
            <Blogs product={product} handleFvt={handleFvt}/>
          </div>

          <div className='mt-40 w-[30%]'>
            <BuyProduct fvtItem={fvtItem} totalPrice={totalPrice}></BuyProduct>
          </div>
    </div>
   </div>
   
   </>
  )
}

export default App
