import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import AlertMessage from '../AlertMessage'

const LoginFrom = () => {
    const { loginUser } = useContext(AuthContext)
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()

    const { username, password } = loginForm
    const [alert, setAlert] = useState(null)
    const onChangenLoginForm = event => setLoginForm({
        ...loginForm,
        [event.target.name]: event.target.value
    })
    const login = async event => {
        event.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success) {
                history.push('/dashboard')
            } else {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Form className='my-4' onSubmit={login}>

                <AlertMessage info={alert}></AlertMessage>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={username}
                        onChange={onChangenLoginForm}
                        required />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={onChangenLoginForm}
                        required />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
            </Form>
            <p>
                Don't have an acccount?
            <Link to='/register'>
                    <Button variant='info' size='sm' className='ml-2'>Register</Button>
                </Link>
            </p>
        </>
    )
}

export default LoginFrom
