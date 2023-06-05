import { useContext } from "react"
import AuthProvider from "./AuthProvider"

const useAuth = () => {
	return useContext(AuthProvider)
}

export default useAuth