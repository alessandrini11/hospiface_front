import React from 'react'
import Container from './Container'
import Icon from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header className="bg-teal-500 py-4 text-white">
        <Container className="">
            <div className="flex justify-between items-center">
                <div className="">Left</div>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1">  
                    <img src={Icon} className="h-6" alt="icon" />
                    <span>Schuame Alexandre Lionel</span>
                  </div>
                  <a href="#" className=""><FontAwesomeIcon icon={faCog}/></a>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header