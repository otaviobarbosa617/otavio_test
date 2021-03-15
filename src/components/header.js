import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar expand="md" collapseOnSelect={true}>
        <Navbar.Brand as="h1" href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="justify-content-center">
          <Nav as="ul" className="ml-auto text-center">
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">Home</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/about/" className="nav-link" activeClassName="active">About</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/blog/" className="nav-link" activeClassName="active">Blog</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/contact/" className="nav-link" activeClassName="active">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
