// import React from 'react'

import Banner from "../components/Banner"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Headers from "../components/Headers"
import New from "../components/New"
import Service from "../components/Service"
import Shop from "../components/Shop"
import { Iproduct } from "../interface/product"

interface DashBoardProps{
  products:Iproduct[]
}

const DashBoard = ({products}:DashBoardProps) => {
  return (
    <div>
        <Headers />
            <Banner />
            <New products={products} onRemove={() => {}} />
            <Shop  products={products} onRemove={() => {}} />
            <Blog />
            <Service />
            <Footer />
            {/* <Outlet/> */}
    </div>
  )
}

export default DashBoard