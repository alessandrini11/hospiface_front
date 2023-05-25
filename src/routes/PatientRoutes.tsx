import React from 'react'
import PatientIndex from '../pages/patient/index'
import PatientNew from '../pages/patient/New'
import PatientEdit from '../pages/patient/Edit'
import { Route, Routes } from 'react-router-dom'
type Props = {}

const PatientRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<PatientIndex />}/>
        <Route path="new" element={<PatientNew />} />
        <Route path="edit/:patientId" element={<PatientEdit />} />
    </Routes>
  )
}

export default PatientRoutes