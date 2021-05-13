import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import learnItLogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

const NavbarMenu = () => {
    const { authState: { user: { username } }, logoutUser } = useContext(AuthContext)
    const logout = () => {
        logoutUser()
    }
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-wight-bolder text-white'>
                <img src={learnItLogo} alt='learnItlogo' width='32' height='32' className='mr-2' />
                LearnIt
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='bassic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='bassic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link className='font-wight-bolder text-white' to='/dashboard' as={Link}>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link className='font-wight-bolder text-white' to='/about' as={Link}>
                        About
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link className='font-wight-bolder text-white' disabled>
                        Welcome {username}
                    </Nav.Link>
                    <Button variant='danger' className='font-wight-bolder text-white' onClick={logout}>
                        <img src={logoutIcon} alt='logouticon' width='32' height='32' className='mr-2' />
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu
