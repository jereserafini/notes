import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
            <Navbar.Brand className='text-white'>MY NOTES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="text-white mx-5 text-decoration-none" to="/">Active</Link>
                <Link className="text-white mx-5 text-decoration-none" to="/archive">Archive</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header