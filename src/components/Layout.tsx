import React, { ReactNode, useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
type Props = {
  children: ReactNode
}
const Layout = ({ children} : Props) => {
  
  return (
    <div className="layout-wrapper">
        <Header></Header>
        <SideBar></SideBar>
        <div className="vertical-overlay"></div>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout