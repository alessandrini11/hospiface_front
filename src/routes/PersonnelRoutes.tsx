import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/personnel'
type Props = {}

const PersonnelRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<Index />}/>
    </Routes>
  )
}

export default PersonnelRoutes