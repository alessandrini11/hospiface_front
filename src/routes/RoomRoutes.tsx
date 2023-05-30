import React from 'react'
import Index from '../pages/room/Index'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const RoomRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            {/* <Route path="new" element={<New />}/> */}
            {/* <Route path="edit/:personnelId" element={<Edit />}/> */}
        </Routes>
    )
}

export default RoomRoutes