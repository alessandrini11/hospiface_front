import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DrugNew from '../pages/drug/New'
type Props = {}

const DrugRoutes = (props: Props) => {
  return (
    <Routes>
        {/* <Route path="/" element={<ConsultationIndex />}/> */}
        <Route path="new/:orderId" element={<DrugNew />} />
        {/* <Route path="edit/:consultationId" element={<ConsultationEdit />} /> */}
        {/* <Route path="show/:consultationId" element={<ConsultationShow />} /> */}
    </Routes>
  )
}

export default DrugRoutes