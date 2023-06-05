import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../routes/useAuth"



/*
|--------------------------------------------------------------------------
| Add interface to play with roles if role needs to be checked
|--------------------------------------------------------------------------
|
| interface Props {
|	  allowedRoles: string[]
| }
|
*/

const ProtectedRoute: React.FC = () => {
	const { user, isLoading } = useAuth()
	const location = useLocation()

	return <Outlet />
}

export default ProtectedRoute
