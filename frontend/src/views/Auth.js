import React, { useContext } from 'react'
import Login from '../components/Auth/LoginForm'
import Register from '../components/Auth/RegisterForm'
import { AuthContext } from '../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router'

const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuththenticated } } = useContext(AuthContext)
    let body
    if (authLoading) {
        body = (
            <div className="d-flex justify-content-center mt-2">
                <Spinner animation='border' variant='info'></Spinner>
            </div>
        )
    } else if (isAuththenticated) {
        return <Redirect to='/dashboard' />
    } else {
        body = (
            <>
                { authRoute === 'login' && <Login />}
                { authRoute === 'register' && <Register />}
            </>
        )
    }
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>Learn It</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
                </div>
            </div>
        </div>

    )
}

export default Auth
