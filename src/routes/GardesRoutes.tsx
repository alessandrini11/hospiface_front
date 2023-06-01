import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/garde/Index'

type Props = {}

const GardesRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            {/* <Route path="new" element={<New />}/> */}
            {/* <Route path="edit/:roomId" element={<Edit />}/>/ */}
        </Routes>
    )
}

export default GardesRoutes