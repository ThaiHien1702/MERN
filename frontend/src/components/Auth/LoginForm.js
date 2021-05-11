import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

const LoginFrom = () => {
    const { loginUser } = useContext(AuthContext)
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const { username, password } = loginForm
    const onChangeLoginForm = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }
    const login = async (event) => {
        event.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            console.log(loginData);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Fragment>
            <Form className='my-4' onSubmit={login}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        value={username}
                        onChange={onChangeLoginForm}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={onChangeLoginForm}
                    />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
            </Form>
            <p>Don't have account?
                <Link to='register'>
                    <Button variant='info' size='sm' className='ml-2'> Register</Button>
                </Link>
            </p>
        </Fragment>
    )
}

export default LoginFrom