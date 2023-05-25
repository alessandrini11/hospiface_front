import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/personnel'
import New from '../pages/personnel/New'
import Edit from '../pages/personnel/Edit'
type Props = {}

const PersonnelRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="new" element={<New />}/>
        <Route path="edit/:personnelId" element={<Edit />}/>
    </Routes>
  )
}

export default PersonnelRoutes