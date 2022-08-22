import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontSize: "24px"
}
const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar fixed='bottom' bg='none' variant='light' expand='md'>
        <Container style={{border: "2px solid black", width: "fit-content"}}>
            <Navbar.Brand className='mx-3'>
                <Link to='/' style={linkStyle}>
                    My Junimo
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-6'>
                    {/* {user && (
                        <span className='navbar-text mr-2'>Welcome, {user.email}</span>
                    )} */}
                    {alwaysOptions}
                    {user ? authenticatedOptions : unauthenticatedOptions}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header
