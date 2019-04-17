import React, { Component } from 'react';
import OrderItem from './OrderItem';

export class OrderContainer extends Component {
    //map each order to OrderItem component
    render() {
        return this.props.orders.map((order) => (
            <OrderItem key={order._id} order={order} />
        ));
    }
}

export default OrderContainer
