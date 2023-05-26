import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConsultationIndex from '../pages/consultation/Index'
import ConsultationNew from '../pages/consultation/New'
import ConsultationEdit from '../pages/consultation/Edit'
type Props = {}

const ConsultationRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<ConsultationIndex />}/>
        <Route path="new" element={<ConsultationNew />} />
        <Route path="edit/:consultationId" element={<ConsultationEdit />} />
    </Routes>
  )
}

export default ConsultationRoutes