import React from "react";
import './Footer.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Copyright from "../Copyright/Copyright";

import { NavLink } from 'react-router-dom';


function Footer() {
    return(
        <Container fluid className="Footer-Container">
            <Row id="row">
                <Col>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </Col>
                <Col>
                    {/* <NavLink to="/contact">
                        Contact
                    </NavLink> */}
                </Col>
            </Row>
            <Row id="row">
                <Copyright />
            </Row>
        </Container>
    )
}

export default Footer;