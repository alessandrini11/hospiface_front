import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MedicalExamNew from '../pages/MedicalExam/New'
type Props = {}

const MedicalExamRoutes = (props: Props) => {
  return (
    <Routes>
        {/* <Route path="/" element={<ConsultationIndex />}/> */}
        <Route path="new/:resultId" element={<MedicalExamNew />} />
        {/* <Route path="edit/:consultationId" element={<ConsultationEdit />} /> */}
        {/* <Route path="show/:consultationId" element={<ConsultationShow />} /> */}
    </Routes>
  )
}

export default MedicalExamRoutes