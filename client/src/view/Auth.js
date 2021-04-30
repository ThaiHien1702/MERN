import React from 'react'
import LoginFrom from '../components/Layout/auth/LoginFrom'
import RegisterFrom from '../components/Layout/auth/RegisterFrom'

const Auth = ({ authRoute }) => {
    let body

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
