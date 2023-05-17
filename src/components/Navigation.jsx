import React from 'react'
import Container from './Container'

const Navigation = () => {
  return (
    <div>
        <Container>
            <div className="flex justify-between py-2">
                <div className="">Hospital Dashboard</div>
                <div className="">Hospital /</div>
            </div>
        </Container>
    </div>
  )
}

export default Navigation