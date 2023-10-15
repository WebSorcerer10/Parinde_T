import React
import "./footer.css";

import { Container, Row, Col, ListGroup, ListItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3"></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;