import { Route, Routes } from "react-router-dom"
import Edit from "./pages/patient/Edit"
import New from "./pages/patient/New"
import Index from "./pages/patient/index"
import Home from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/patients/*" element={<Index />}>
        <Route path="new" element={<New />} />
        <Route path="edit/:patientId" element={<Edit />} />
      </Route>
    </Routes>
  )
}

export default App
