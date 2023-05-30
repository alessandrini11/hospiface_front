import React from 'react'
import Index from '../pages/room/Index'
import { Route, Routes } from 'react-router-dom'
import New from '../pages/room/New'
import Edit from '../pages/room/Edit'

type Props = {}

const RoomRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="new" element={<New />}/>
            <Route path="edit/:roomId" element={<Edit />}/>
        </Routes>
    )
}

export default RoomRoutes