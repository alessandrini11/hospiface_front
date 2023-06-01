import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/user/Index'

type Props = {}

const UserRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    )
}

export default UserRoutes