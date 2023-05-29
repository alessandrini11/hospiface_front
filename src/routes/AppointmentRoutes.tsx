import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppointmentIndex from '../pages/Appointment/Index'
type Props = {}

const AppointmentRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<AppointmentIndex />}/>
        {/* <Route path="new/:orderId" element={<DrugNew />} /> */}
        {/* <Route path="edit/:consultationId" element={<ConsultationEdit />} /> */}
        {/* <Route path="show/:consultationId" element={<ConsultationShow />} /> */}
    </Routes>
  )
}

export default AppointmentRoutes