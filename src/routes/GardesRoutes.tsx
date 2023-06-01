import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/garde/Index'
import New from '../pages/garde/New'
import Edit from '../pages/garde/Edit'
import Show from '../pages/garde/Show'

type Props = {}

const GardesRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="new" element={<New />}/>
            <Route path="edit/:gardeId" element={<Edit />}/>
            <Route path="show/:gardeId" element={<Show />}/>
        </Routes>
    )
}

export default GardesRoutes