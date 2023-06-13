import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

type loggedUser = {
	firstname: string,
	lastname: string,
	email: string,
	roles: string[]
}
const ProtectedRoute: React.FC = () => {
	const user = useState<loggedUser | null>(null)
	const token = localStorage.getItem("token")
	if(!token){
		return <Navigate to="/login"></Navigate>
	}
	return <Outlet />
}

export default ProtectedRoute
