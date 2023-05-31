import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/affectation/Index'
import New from '../pages/affectation/New'
import Edit from '../pages/affectation/Edit'

type Props = {}

const AffectationRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="new" element={<New />} />
            <Route path="edit/:affectionId" element={<Edit />} />
        </Routes>
    )
}

export default AffectationRoutes