import React from 'react'

const CardChart = (props) => {
    return (
        <div className="bg-white p-5">
            <div className="">
                <h1>Consultations</h1>
            </div>
            {props.children}
        </div>
    )
}

export default CardChart