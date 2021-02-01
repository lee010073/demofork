import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar1 = () => {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="sm" bg="danger" variant="dark">
                <Navbar.Brand >Demo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/Chart1"><Nav.Link href="Chart1">Chart1</Nav.Link></Link>
                        <Link to="/Chart2"><Nav.Link href="Chart2">Chart2</Nav.Link></Link>
                        <Link to="/Chart3"><Nav.Link href="Chart3">Chart3</Nav.Link></Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar1;