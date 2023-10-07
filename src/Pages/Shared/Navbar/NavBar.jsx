import {  Container, Nav,Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary my-4">
      <Container className="d-flex justify-content-between">
        <h2>Redux</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav ">
          <Nav className="me-auto d-flex gap-4 align-items-md-center ">
            <Link className="text-decoration-none h5" to='/'>Home</Link>
            <Link className="text-decoration-none h5" to='private'>Protected Route</Link>
            <Link className="text-decoration-none h5" to='/about'>About</Link>
            <Link className="text-decoration-none h5" to='/contact'>Contact Us</Link>
            <div>
                <Link to='/login' className="btn btn-primary">Login</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;