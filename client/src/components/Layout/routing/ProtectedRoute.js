import React, { useContext } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
    if (authLoading) {
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info'></Spinner>
            </div>
        )
    }
    return (
        <Route {...rest} render={props => isAuthenticated ? (
            <>
                <Component {...rest} {...props} />
            </>
        ) : (
            <Redirect to='/login'></Redirect>
        )} />
    )
}

export default ProtectedRoute
