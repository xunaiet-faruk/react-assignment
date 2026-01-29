import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Blogs from './Component/Blogs/Blogs'
import BuyProduct from './Component/Buyer/BuyProduct'
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Component/Footer'

function App() {
  const [product,setProduct] =useState([])
  const [fvtItem,setItem] =useState([]);
 const [deleted,setDeleted] =useState([])



  useEffect(()=>{

    fetch('product.json')
    .then(res => res.json())
    .then(data =>setProduct(data))

  
  },[])

  const handleFvt = (item) => {
    setItem([...fvtItem, item])

    toast("Your Fvt Product Added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    })
  }

  const handleDelete =(id) =>{
    const EachProduct =fvtItem.filter(item => item.id !== id )
    setItem(EachProduct)
  }

  const totalPrice =fvtItem.reduce((sum,total) => sum + total.price,0)

  return (
   <>
   
   <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

    <Navbar>

    </Navbar>

        <Banner></Banner>

      <div className='flex '>

          <div className='w-[70%]'>
            <Blogs product={product} handleFvt={handleFvt}/>
          </div>

          <div className='mt-40 w-[30%]'>
            <BuyProduct fvtItem={fvtItem} totalPrice={totalPrice} handleDelete={handleDelete}></BuyProduct>
          </div>
    </div>
   </div>

   <div>
    <Footer/>
   </div>
   
   </>
  )
}

export default App
