import React, { useState } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Container from './Container'
import MobileMenu from './MobileMenu'
import Sidebar from './Sidebar'
const Layout = ({page, sub_page, children}) => {
  const [open, setOpen] = useState(true)
  const handleMobileMenu = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <div className="grid grid-cols-7 relative">
        <MobileMenu open={open} handleMobileMenu={handleMobileMenu} ></MobileMenu>
        <Sidebar />
        <div className="col-span-7 lg:col-span-6">
            <Header handleMobileMenu={handleMobileMenu} ></Header>
            <Navigation page={page} sub_page={sub_page}></Navigation>
            <main className="bg-gray-100 py-10">
              <Container>
                {children}
              </Container>
            </main>
        </div>
    </div>
  )
}

export default Layout