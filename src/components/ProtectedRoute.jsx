import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
	// logique du isLoggedIn

	if (isLoggedIn) {
		return <Outlet />
	}

	return <Navigate to="/login" />
}

export default ProtectedRoute
