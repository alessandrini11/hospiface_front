import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/hospitalisation/Index'
import New from '../pages/hospitalisation/New'
import Edit from '../pages/hospitalisation/Edit'
type Props = {}

const HospitalisationRoutes = (props : Props) => {

    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="new" element={<New />} />
            <Route path="edit/:hospitalisationId" element={<Edit />} />
        {/* <Route path="show/:consultationId" element={<ConsultationShow />} /> */}
        </Routes>
    )
}

export default HospitalisationRoutes