import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Fragment>
            <Form className='my-4'>
                <Form.Group>
                    <Form.Control type='text' placeholder='Username' name='username' required />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Password' name='password' required />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' placeholder='Confirm Password' name='confirmpassword' required />
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
