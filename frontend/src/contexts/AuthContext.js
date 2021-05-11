import { createContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import { LOCAL_STOGAE_TOKEN_NAME, url } from './Constants'
import { authReducer } from '../reducers/authReducer';
import setAuthToken from '../Utils/setAuthToken';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispath] = useReducer(authReducer, {
        authLoading: true,
        isAuththenticated: false,
        user: null
    })
    //authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STOGAE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STOGAE_TOKEN_NAME])
        }
        try {
            const response = await axios.get(`${url}/auth`)
            if (response.data.success) {
                dispath({
                    type: 'SET_AUTH',
                    payload: { isAuththenticated: true, user: response.data.user }
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STOGAE_TOKEN_NAME)
            setAuthToken(null)
            dispath({
                type: 'SET_AUTH',
                payload: { isAuththenticated: false, user: null }
            })
        }
    }
    useEffect(() => loadUser(), [])
    //function login
    const loginUser = async (userFrom) => {
        try {
            const response = await axios.post(`${url}/auth/login`, userFrom)
            if (response.data.success)
                localStorage.setItem(LOCAL_STOGAE_TOKEN_NAME, response.data.accessToken)

            await loadUser()
            return response.data

        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }
    //context data
    const authContextData = { loginUser, authState }
    //return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
