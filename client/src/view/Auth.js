import React, { useContext } from 'react'
import LoginFrom from '../components/Layout/auth/LoginFrom'
import RegisterFrom from '../components/Layout/auth/RegisterFrom'
import { AuthContext } from '../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router'

const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
    let body

    if (authLoading) {
        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner anomation='border' variant='info'></Spinner>
            </div>
        )
    } else if (isAuthenticated) {
        return <Redirect to='/dashboard'></Redirect>
    } else {

        body = (
            <>
                {
                    authRoute === 'login' && <LoginFrom></LoginFrom>
                }
                {
                    authRoute === 'register' && <RegisterFrom></RegisterFrom>
                }
            </>
        )
    }
    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1>LearnIt</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth
