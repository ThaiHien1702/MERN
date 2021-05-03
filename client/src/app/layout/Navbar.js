import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import learnItLogo from '../../assets/logo.svg'
import logoutLogo from '../../assets/logout.svg'

import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow' >
            <Navbar.Brand className='font-weight-bolder text-white'>
                <img src={learnItLogo} alt='learnItLogo' width='32' deight='32' className='mr-2'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>Dashboard</Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className='font-weight-bolder text-white ' disabled>Welcome</Nav.Link>
                    <Button variant='danger' className='font=weight-bolder text-white'>
                        <img src={logoutLogo} alt='logoutLogo' width='32' deight='32' className='mr-2'></img>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu
