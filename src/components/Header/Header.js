import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/transportLogo.png";
import "./Header.css"


const Header = () => {
    //console.log("Naushad");
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="/home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="nav" href="/home">Home</Nav.Link>
                    <Nav.Link className="nav" href="/destination">Destination</Nav.Link>
                    <Nav.Link className="nav" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="nav" href="/contact">Contact</Nav.Link>
                    <Link className="navButton" to="/login">Log In</Link>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
};

export default Header;