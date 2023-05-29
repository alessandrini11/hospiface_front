import React from 'react'
import Container from './Container'
import MenuItem from './MenuItem'
import Icon from '../assets/react.svg'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'

const Sidebar = () => {
  return (
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
                    <MenuItems />
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar