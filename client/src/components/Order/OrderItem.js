import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export class OrderItem extends Component {
    //display order name and number
    //link to view order page
    render() {
        return (
            <div>
                <Link
                    to={{
                        pathname: '/order',
                        state: { order: this.props.order },
                        search: `id=${this.props.order._id}`
                    }}
                    style={linkStyle}
                >
                    <ListGroupItem style={itemStyle}>
                        <p><b>Name:</b> {this.props.order.name}</p>
                        <p><b>ID:</b> {this.props.order._id}</p>
                    </ListGroupItem>
                </Link><br />
            </div>
        )
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center'
}

const itemStyle = {
    border: '1px solid black',
    boxShadow: '5px 10px #888888',
    background: 'rgba(104,104,104,0.1)',
}

export default OrderItem
