import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import DashboardRoutes from "./routes/DashboardRoutes"
import ProtectedRoute from "./components/ProtectedRoute"
import Custom from "./pages/Custom_page"
import { AuthProvider } from "./routes/AuthProvider"

function App() {

  return (
      <Routes>
        {/* <Route element={<Custom />} path="/custom"></Route> */}
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={<DashboardRoutes  />} />
        </Route>
      </Routes>
  )
}

export default App
