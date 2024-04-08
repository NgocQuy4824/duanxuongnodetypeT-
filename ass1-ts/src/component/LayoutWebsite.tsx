// import React from 'react'

import { Outlet } from "react-router-dom"
import HeaderWebsite from "./HeaderWebsite"
import FooterWebsite from "./FooterWebsite"

const LayoutWebsite = () => {
  return (
    <>
      <div className="container">
        <HeaderWebsite/>
        <main>
          <Outlet />
        </main>
        <FooterWebsite/>
      </div>
    </>
  )
}

export default LayoutWebsite