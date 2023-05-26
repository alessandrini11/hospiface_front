import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConsultationIndex from '../pages/consultation/Index'
import ConsultationNew from '../pages/consultation/New'
type Props = {}

const ConsultationRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<ConsultationIndex />}/>
        <Route path="new" element={<ConsultationNew />} />
        {/* <Route path="edit/:patientId" element={<PatientEdit />} /> */}
    </Routes>
  )
}

export default ConsultationRoutes