import React, { Component } from 'react'
import {
    Container, Row, Col,
    ListGroup
} from 'reactstrap';

import OrderContainer from '../../components/Order/OrderContainer';
import AddOrder from '../Order/AddOrder';
import { getOrders } from '../../api/OrderAPI';

export class Orders extends Component {
    state = {
        isMounted: false,
        orders: [],
        msg: ''
    }

    /**
     * get all orders and set them to state
     */
    componentDidMount() {
        //api get all orders and set state
        getOrders().then((data) => this.setState({ orders: data }));
        this.setMsg();
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    // componentDidUpdate() {

    //     //api get all orders and set state
    //     getOrders().then((data) => this.setState({ orders: data }));
    // }

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
                        <Col>
                            <AddOrder />
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
