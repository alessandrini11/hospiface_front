import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PatientRoutes from "./routes/PatientRoutes"
import PersonnelRoutes from "./routes/PersonnelRoutes"
import ConsulationRoutes from "./routes/ConsultationRoutes"
import Layout from "./components/Layout"
import MedicalExamRoutes from "./routes/MedicalExamRoutes"
import DrugRoutes from "./routes/DrugRoutes"
import AppointmentRoutes from "./routes/AppointmentRoutes"
import HospitalisationRoutes from "./routes/HospitalisationRoutes"
import RoomRoutes from "./routes/RoomRoutes"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/patients/*" element={<PatientRoutes />}></Route>
        <Route path="/personnel/*" element={<PersonnelRoutes />}></Route>
        <Route path="/consultations/*" element={<ConsulationRoutes />}></Route>
        <Route path="/medicalexam/*" element={<MedicalExamRoutes />}></Route>
        <Route path="/drug/*" element={<DrugRoutes />}></Route>
        <Route path="/rendezvous/*" element={<AppointmentRoutes />}></Route>
        <Route path="/hospitalisations/*" element={<HospitalisationRoutes />}></Route>
        <Route path="/chambres/*" element={<RoomRoutes />}></Route>
    </Routes>
    </Layout>
  )
}

export default App
