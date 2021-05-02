import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import AlertMessage from '../AlertMessage'

const RegisterFrom = () => {
    //context
    const { registerUser } = useContext(AuthContext)

    //local state
    const [registerForm, setregisterForm] = useState({
        username: '',
        password: '',
        confirmpassword: ''
    })
    const [alert, setAlert] = useState(null)
    const { username, password, confirmpassword } = registerForm
    const onChangeRegisterForm = event => {
        setregisterForm({ ...registerForm, [event.target.name]: event.target.value })
    }
    const register = async event => {
        event.preventDefault()
        if (password !== confirmpassword) {
            setAlert({ type: 'danger', message: 'Passwords do not match' })
            setTimeout(() => setAlert(null), 5000)
            return
        }
        try {
            const registerData = await registerUser(registerForm)
            if (!registerData.success) {
                setAlert({ type: 'danger', message: registerData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <Form className='my-4' onSubmit={register}>
                <AlertMessage info={alert}></AlertMessage>
                <Form.Group>
                    <Form.Control type='text' placeholder='Username' name='username' required value={username} onChange={onChangeRegisterForm} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Password' name='password' required value={password} onChange={onChangeRegisterForm} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Confirm Password' name='confirmpassword' required value={confirmpassword} onChange={onChangeRegisterForm} />
                </Form.Group>
                <Button variant='success' type='submit'>Register</Button>
            </Form>
            <p>
                Already have an account?
            <Link to='/login'>
                    <Button variant='info' size='sm' className='ml-2'>Login</Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterFrom
