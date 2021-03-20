import React, { useContext } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from "../../images/transportLogo.png";
import "./Header2.css"


const Header2 = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
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
                    <h1 className="navHeading">{loggedInUser.name || loggedInUser.email}</h1>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
};

export default Header2;