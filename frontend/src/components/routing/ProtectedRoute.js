import React, { useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext'
import NavbarMenu from '../layout/NavbarMenu'


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authState: { authLoading, isAuththenticated } } = useContext(AuthContext)
    if (authLoading) {
        <div className='spinner-container'>
            <Spinner animation='border' variant='info' />
        </div>
    }
    return (
        <Route
            {...rest} render={props => isAuththenticated ? (
                <>
                    <NavbarMenu></NavbarMenu>
                    <Component {...rest} {...props} />
                </>
            ) : (
                <Redirect to='login' />
            )
            }
        />


    )
}

export default ProtectedRoute
