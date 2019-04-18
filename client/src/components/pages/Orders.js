import React, { Component } from 'react'
import {
    Container, Row, Col,
    ListGroup, Button
} from 'reactstrap';

import OrderContainer from '../../components/Order/OrderContainer';
import AddOrder from '../Order/AddOrder';
import { getOrders } from '../../api/OrderAPI';

export class Orders extends Component {
    state = {
        orders: [],
        msg: ''
    }

    /**
     * retrive orders and set state
     */
    retrieveOrders = () => {
        //api get all orders and set state
        getOrders().then((data) => this.setState({ orders: data }));
    }

    componentDidMount() {
        this.retrieveOrders();
        this.setMsg();
    }

    /**
     * show if no orders are available
     */
    setMsg() {
        //console.log(getOrders());
        if (getOrders().length === 0) {
            this.setState({ msg: 'No orders available' })
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><h1 style={headerStyle}>Orders</h1></Col>
                    </Row><br />
                    <Row>
                        <Col sm="10" xs="8">
                            <AddOrder />
                        </Col>
                        <Col sm="2" xs="4">
                            <Button color="primary" onClick={this.retrieveOrders}>
                                Refresh
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{this.state.msg}</p>
                            <ListGroup>
                                <OrderContainer
                                    orders={this.state.orders}
                                />
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

const headerStyle = {
    textAlign: 'center'
};

// const buttonStyle = {
//     width: '100%'
// };

export default Orders
