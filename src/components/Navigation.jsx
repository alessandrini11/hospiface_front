import React from 'react'
import Container from './Container'

const Navigation = ({page, sub_page}) => {
  return (
    <div>
        <Container>
            <div className="flex justify-between py-2">
                <div className="">Hospital Dashboard</div>
                <div className="">Hospital / {page && <span className="">{page}</span>} {sub_page && <span className="">/ {sub_page}</span>} </div>
            </div>
        </Container>
    </div>
  )
}

export default Navigation