import React from 'react'
import { Route, Routes } from 'react-router-dom'
import New from '../pages/personnelGarde/New'

type Props = {}

const PersonnelGardeRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="new/:gardeId" element={<New />}></Route>
        </Routes>
    )
}

export default PersonnelGardeRoutes