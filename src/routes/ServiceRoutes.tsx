import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/MedicalService/Index'
import Show from '../pages/MedicalService/Show'
import New from '../pages/MedicalService/New'
import Edit from '../pages/MedicalService/Edit'

type Props = {}

const ServiceRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="new" element={<New />}/>
        <Route path="show/:serviceId" element={<Show />}/>
        <Route path="edit/:serviceId" element={<Edit />}/>
    </Routes>
  )
}

export default ServiceRoutes