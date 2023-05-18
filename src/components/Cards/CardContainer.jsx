import React from 'react'
import Container from '../Container'

const CardContainer = (props) => {
  return (
    <div className="py-5 bg-white">
        <Container>
            {props.children}
        </Container>
    </div>
  )
}

export default CardContainer