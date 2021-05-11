import { createContext, useReducer } from 'react'
import axios from 'axios';
import { LOCAL_STOGAE_TOKEN_NAME, url } from './Constants'
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispath] = useReducer(authReducer, {
        authLoading: true,
        isAyththenticated: false,
        user: null
    })
    //function login
    const loginUser = async (userFrom) => {
        try {
            const response = await axios.post(`${url}/auth/login`, userFrom)
            if (response.data.success)
                localStorage.setItem(LOCAL_STOGAE_TOKEN_NAME, response.data.accessToken)
            return response.data

        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }
    //context data
    const authContextData = { loginUser }
    //return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
