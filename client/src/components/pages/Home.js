import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container, Row, Col,
    Button
} from 'reactstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={headerStyle}>Home</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/inventory" style={linkStyle}>
                                <Button color="primary" style={buttonStyle}>Inventory</Button>
                            </Link>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <Link to="/orders" style={linkStyle}>
                                <Button color="info" style={buttonStyle}>Orders</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const buttonStyle = {
    width: '100%',
    height: '200px',
    fontSize: '2rem',
};

const linkStyle = {
    alignContent: 'center'
};

const headerStyle = {
    textAlign: 'center'
}

export default Home
