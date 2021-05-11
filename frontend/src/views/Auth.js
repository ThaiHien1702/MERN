import React from 'react'
import Login from '../components/Auth/LoginForm'
import Register from '../components/Auth/RegisterForm'

const Auth = ({ authRoute }) => {
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>Learn It</h1>
                    <h4>Keep track of what you are learning</h4>
                    {authRoute === 'login' && <Login />}
                    {authRoute === 'register' && <Register />}
                </div>
            </div>
        </div>

    )
}

export default Auth
