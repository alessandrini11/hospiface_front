import React from 'react'
import Container from './Container'
import MenuItem from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faX } from '@fortawesome/free-solid-svg-icons'
import icon from '../assets/react.svg'
import MenuItems from './MenuItems'
const MobileMenu = ({handleMobileMenu, open}) => {
    return (
        <div className={`lg:hidden absolute z-10 top-0 w-full ${ open && '-translate-x-full'} transform transition-all duration-300 bg-black/75`}>
            <div style={{minHeight: '100vh'}} className="w-1/2 shadow-md shadow-black bg-white z-10">
                <div className="py-4 bg-teal-600 text-white">
                    <Container>
                        <div className="flex justify-between items-center px-4">
                            <a href="/" className="flex items-center justify-start space-x-2">
                                <img src={icon} className="h-6" alt="" />
                                <span className="">Hospiface</span>
                            </a>
                            <button onClick={handleMobileMenu} role='button'><FontAwesomeIcon icon={faX} /></button>
                        </div>
                    </Container> 
                </div>
                <div className="py-2">
                <div className="w-10/12 mx-auto">
                    <div>
                        <a href="/" className="">Dashboard</a>
                        <ul>
                            <MenuItems />
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu