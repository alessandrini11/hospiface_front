import React from 'react'

const CardChart = ({name, children}) => {
    return (
        <div className="bg-white p-5">
            <div className="">
                <h1>{name}</h1>
            </div>
            {children}
        </div>
    )
}

export default CardChart