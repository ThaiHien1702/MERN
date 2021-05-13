import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AlertMessage from '../AlertMessage/AlertMessage'
import { AuthContext } from '../../contexts/AuthContext'

const Register = () => {
    //context
    const { registerUser } = useContext(AuthContext)
    //local state
    const [alert, setAlert] = useState(null)
    const [registreForm, setRegisterFrom] = useState({
        username: '',
        password: '',
        confirmpassword: ''
    })
    const { username, password, confirmpassword } = registreForm
    const onChangeRigisterForm = (event) => {
        setRegisterFrom({ ...registreForm, [event.target.name]: event.target.value })
    }
    const register = async event => {
        event.preventDefault()
        if (password !== confirmpassword) {
            setAlert({ type: 'danger', message: 'Password do not match' })
            setTimeout(() => setAlert(null), 5000)
            return
        }
        try {
            const registerData = await registerUser(registreForm)
            if (!registerData.success) {
                setAlert({ type: 'danger', message: registerData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Fragment>
            <Form className='my-4' onSubmit={register}>
                <AlertMessage info={alert} />
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        value={username}
                        onChange={onChangeRigisterForm}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={onChangeRigisterForm}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmpassword'
                        required
                        value={confirmpassword}
                        onChange={onChangeRigisterForm}
                    />
                </Form.Group>
                <Button variant='success' type='submit'>Register</Button>
            </Form>
            <p>Already Have An Account?
                <Link to='login'>
                    <Button variant='info' size='sm' className='ml-2'>Login</Button>
                </Link>
            </p>
        </Fragment>
    )
}

export default Register
