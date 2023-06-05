import React from 'react'

const CardChart = ({name, children}) => {
    return (
        <div className="bg-white p-5">
            <div className="">
                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">{name}</p>
            </div>
            {children}
        </div>
    )
}

export default CardChart