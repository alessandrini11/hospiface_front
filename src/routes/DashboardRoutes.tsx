import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/Home'
import AffectationRoutes from './AffectationRoutes'
import AppointmentRoutes from './AppointmentRoutes'
import DrugRoutes from './DrugRoutes'
import GardesRoutes from './GardesRoutes'
import HospitalisationRoutes from './HospitalisationRoutes'
import MedicalExamRoutes from './MedicalExamRoutes'
import PatientRoutes from './PatientRoutes'
import PersonnelGardeRoutes from './PersonnelGardeRoutes'
import PersonnelRoutes from './PersonnelRoutes'
import RoomRoutes from './RoomRoutes'
import ServiceRoutes from './ServiceRoutes'
import UserRoutes from './UserRoutes'
import ConsultationRoutes from './ConsultationRoutes'

interface Props {}

const DashboardRoutes = (props: Props) => {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/patients/*" element={<PatientRoutes />}></Route>
            <Route path="/personnel/*" element={<PersonnelRoutes />}></Route>
            <Route path="/consultations/*" element={<ConsultationRoutes />}></Route>
            <Route path="/medicalexam/*" element={<MedicalExamRoutes />}></Route>
            <Route path="/drug/*" element={<DrugRoutes />}></Route>
            <Route path="/rendezvous/*" element={<AppointmentRoutes />}></Route>
            <Route path="/hospitalisations/*" element={<HospitalisationRoutes />}></Route>
            <Route path="/chambres/*" element={<RoomRoutes />}></Route>
            <Route path="/services/*" element={<ServiceRoutes />}></Route>
            <Route path="/affectations/*" element={<AffectationRoutes />}></Route>
            <Route path="/gardes/*" element={<GardesRoutes />} />
            <Route path="/personnel_garde/*" element={<PersonnelGardeRoutes />} />
            <Route path="/users/*" element={<UserRoutes />} />
        </Routes>
      </Layout>
  )
}

export default DashboardRoutes