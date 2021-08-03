import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ user, handleLogout }) => {
  const padding = {
    padding: 5
  }
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">Blogs</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/users">Users</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user
                ? <div>
                  <em> {user.name} logged in</em>
                  <button onClick={handleLogout}>logout</button>
                </div>
                : <Link to="/login">login</Link>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header