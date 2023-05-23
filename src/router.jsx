import {
  Outlet,
    createBrowserRouter,
  } from "react-router-dom";
import Home from './pages/Home'
import PatientIndex from './pages/patient/index'
import PatientNew from './pages/patient/New'
import PatientEdit from './pages/patient/Edit'
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
      element: <PatientEdit />,
    }
  ]); 
export default Router