import { Route, Routes } from "react-router-dom"

import PatientNew from "../pages/patient/New"
import PatientEdit from "../pages/patient/Edit"
import PatientIndex from "../pages/patient/index"

const PatientsRoutes = () => {
	return (
		<Routes path="/" element={<PatientIndex />}>
			<Route path="new" element={<PatientNew />} />
			<Route path=":ID/edit" element={<PatientEdit />} />
			<Route path="new" element={<PatientNew />} />
		</Routes>
	)
}

export default PatientsRoutes
