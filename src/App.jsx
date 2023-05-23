import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Layout from "./components/Layout"
import PatientsRoutes from "./routes/patients.routes"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route path="/" element={<Home />} />
					</Route>
					<Route path="patients/*" element={<PatientsRoutes />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
