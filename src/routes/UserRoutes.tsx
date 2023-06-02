import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/user/Index'
import New from '../pages/user/New'
import Edit from '../pages/user/Edit'

type Props = {}

const UserRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="new" element={<New />} />
            <Route path="edit/:userId" element={<Edit />} />
        </Routes>
    )
}

export default UserRoutes