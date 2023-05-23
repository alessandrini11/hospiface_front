import {
  Outlet,
    createBrowserRouter,
  } from "react-router-dom";
import Home from './pages/Home'
import PatientIndex from './pages/patient/index'
import PatientNew from './pages/patient/New'
import PatientEdit from './pages/patient/Edit'
import PatientShow from './pages/patient/Show'
import PersonnelIndex from './pages/personnel/index'
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,

    },
    {
      path: "/patients",
      element: <PatientIndex></PatientIndex>
    },
    {
      path: "/patients/new",
      element: <PatientNew />,
    },
    {
      path: "/patients/edit/:patientId",
      element: <PatientEdit />,
    },
    {
      path: "/patients/show/:patientId",
      element: <PatientShow />,
    },
    {
      path: "/personnel",
      element: <PersonnelIndex />
    }
  ]); 
export default Router