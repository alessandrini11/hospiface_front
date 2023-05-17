import React from 'react'
import Container from './Container'
const Header = () => {
  return (
    <header className="bg-teal-500 py-4 text-white">
        <Container className="">
            <div className="flex justify-between items-center">
                <div className="">Left</div>
                <div className="">Right</div>
            </div>
        </Container>
    </header>
  )
}

export default Header