import { createContext, FC, ReactNode, useEffect, useState } from "react"
// import { getUserAPI } from "../utils/api"
// import { IAuthContext } from "../types"
import axios from "axios"

interface Props {
	children: ReactNode
}

export interface IAuthContext<TData> {
	user?: TData
	isLoading: boolean
	setUser?: (arg: TData) => void
}

const defaultState = { user: undefined, isLoading: false }
const AuthContext = createContext<IAuthContext<any>>(defaultState)

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<any>(undefined)
	const [isLoading, setIsLoading] = useState(false)

	// handle user state
	const checkIfLoggedIn = async () => {
    setIsLoading(true)
    const token = await localStorage.getItem("token")

		try {
			if (!user && token) {
        console.log("Context execution - 02")
				const data = await axios.get(`/users/profile`, {headers: {'Authorization': `Bearer ${token}`}})
        console.log(data?.data?.data)
				setUser(data?.data?.data)
			}
		} catch (error) {
			// console.log(error)
			// report the error
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
    console.log("Context execution - 01")

		checkIfLoggedIn()
	}, [])

	// values to share in the context
	const values = { user, setUser, isLoading: isLoading }

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext
