import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/user/Index'
import New from '../pages/user/New'

type Props = {}

const UserRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/new" element={<New />} />
        </Routes>
    )
}

export default UserRoutes