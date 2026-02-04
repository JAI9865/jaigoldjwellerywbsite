
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './App.css'
import Earings from './Components/pages/Earings'
import Bangles from './Components/pages/Bangles'
import Chains from './Components/pages/Chains'
import Rings from './Components/pages/Rings'
import AllJewellery from './Components/pages/All Jewellery'
import Coinsbar from './Components/pages/Coins&Bars'
import Collections from './Components/pages/Collections'
import Legacy from './Components/pages/Legacy'
import Delivery from './Components/pages/Delivery'
import Footer from './Components/pages/Footer'
import RootLayout from "./Components/Layout/RootLayout";
import Login from './Components/pages/Login'
import AddProduct from './Components/pages/Addproduct'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rootlayout/>}/>
        <Route path='/Earings' element={<Earings/>}/>
        <Route path='/Bangles' element={<Bangles/>}/>
        <Route path='/Chains' element={<Chains/>}/>
        <Route path='/Rings' element={<Rings/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>

        <Route path='/AllJewellery' element={<AllJewellery/>}/>
        <Route path='/Coinsbar' element={<Coinsbar/>}/>
        <Route path='/Collections' element={<Collections/>}/>
        <Route path='/Legacy' element={<Legacy/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
       
      </Routes>

      
      
        
      
      </BrowserRouter>

      

      

      <Footer/>
     
    </>
  )
}

export default App
