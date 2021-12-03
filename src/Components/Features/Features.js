import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import './Features.css';
import { BsFillLockFill } from "react-icons/bs";
import {BsFillLightningChargeFill} from "react-icons/bs";
import {BsFillPersonCheckFill} from "react-icons/bs";



function Features() {
    return (
        <Container fluid className="Features-Container">
            <Row className="Features-Header-Main">
                <h1>Features</h1>
            </Row>
            <Row className="Features-Row">
              <Col id="Column">
                <Row>
                    <BsFillLightningChargeFill className="Features-Icon" />
                </Row>
                <Row>
                    <p className="Features-Header">Lighting Fast Results</p>
                </Row>
              </Col> 

              <Col id="Column">
                <Row>
                    < BsFillLockFill className="Features-Icon"/>
                </Row>
                <Row>
                    <p className="Features-Header">Secure Seaching Always</p>
                </Row>
              </Col> 

              <Col id="Column">
                <Row>
                    <BsFillPersonCheckFill className="Features-Icon" />
                </Row>
                <Row>
                    <p className="Features-Header">Personlized For You</p>
                </Row>
              </Col> 

            </Row>
        </Container>
    )
}

export default Features;
