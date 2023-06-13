import React, {ReactNode, createContext, useContext, useState} from 'react'
import { createdUpdatedBy } from '../entityPropsType'

type Props = {
    children: ReactNode
}
type ProviderValue = {
    user: createdUpdatedBy | Boolean| undefined,
    login: (user: createdUpdatedBy) => void 
    logout: () => void 
}
const AuthContext = createContext(null)

const AuthProvider = ({children}: Props) => {
    const [user, set_user] = useState<createdUpdatedBy | Boolean>(true)
    const login = (user: createdUpdatedBy) => {
        set_user(user)
    }
    const logout = () => {
        set_user(true)
    }
    const value = {user, login, logout}
    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = (): ProviderValue | null => {
    return useContext(AuthContext)
}