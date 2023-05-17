import React from 'react'
import Container from './Container'

const Navigation = () => {
  return (
    <div>
        <Container>
            <div className="flex justify-between py-2">
                <div className="">Left</div>
                <div className="">Right</div>
            </div>
        </Container>
    </div>
  )
}

export default Navigation