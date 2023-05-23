import React, { useState } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Container from './Container'
import Icon from '../assets/react.svg'
import MenuItem from './MenuItem'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
const Layout = ({page, sub_page, children}) => {
  const [open, setOpen] = useState(true)
  const handleMobileMenu = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <div className="grid grid-cols-7 relative">
        <MobileMenu icon={Icon} open={open} handleMobileMenu={handleMobileMenu} ></MobileMenu>
        <div style={{minHeight: '100vh'}} className="hidden lg:block col-span-1 shadow-md shadow-black z-10">
            <div className="py-4 bg-teal-600 text-white">
                <Container>
                  <div className="">
                    <a href="/" className="flex items-center justify-start space-x-2">
                      <img src={Icon} className="h-6" alt="" />
                      <span className="hidden lg:block">Hospiface</span>
                    </a>  
                  </div>
                </Container> 
            </div>
            <div className="py-2">
              <div className="w-10/12 mx-auto">
                <div>
                  <Link to="/" className="">Dashboard</Link>
                  <ul>
                    <MenuItem title="Patient" links={[{url: '/patients/new', name: 'New'}, {url: '/patients', name: 'List'}]} />
                    <MenuItem title="Personnel" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Consultation" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Resultat Consult." links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Hospitalization" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Rooms" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Personnel" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                    <MenuItem title="Personnel" links={[{url: '/personnel/new', name: 'new'}, {url: '/personnel/list', name: 'List'}]} />
                  </ul>
                </div>
              </div>
            </div>
        </div>
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