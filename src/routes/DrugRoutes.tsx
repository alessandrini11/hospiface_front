import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DrugNew from '../pages/drug/New'
type Props = {}

const DrugRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="new/:orderId" element={<DrugNew />} />
    </Routes>
  )
}

export default DrugRoutes