// import React from 'react'

import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Headers from "../components/Headers"
import Service from "../components/Service"
import Shop from "../components/Shop"
import { Iproduct } from "../interface/product"

interface DashBoardProps{
  products:Iproduct[]
}
// // 
const ShopPage = ({products}:DashBoardProps) => {
  return (
    <div>
      <Headers/>
      <Banner/>
      <Shop products={products} onRemove={() => {}}  />
      <Service/>
      <Footer/>
    </div>
  )
}

export default ShopPage