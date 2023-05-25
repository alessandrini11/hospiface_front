import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConsultationIndex from '../pages/consultation/Index'
type Props = {}

const ConsultationRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<ConsultationIndex />}/>
        {/* <Route path="new" element={<PatientNew />} />
        <Route path="edit/:patientId" element={<PatientEdit />} /> */}
    </Routes>
  )
}

export default ConsultationRoutes