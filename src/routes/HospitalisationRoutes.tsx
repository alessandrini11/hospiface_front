import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HospitisationIndex from '../pages/hospitalisation/Index'
type Props = {}

const HospitalisationRoutes = (props : Props) => {

    return (
        <Routes>
            <Route path="/" element={<HospitisationIndex />}/>
            {/* <Route path="new/:resultId" element={<MedicalExamNew />} /> */}
        {/* <Route path="edit/:consultationId" element={<ConsultationEdit />} /> */}
        {/* <Route path="show/:consultationId" element={<ConsultationShow />} /> */}
        </Routes>
    )
}

export default HospitalisationRoutes