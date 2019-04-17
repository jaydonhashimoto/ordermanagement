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
                    <ListGroupItem>
                        {this.props.order.name} - {this.props.order._id}
                    </ListGroupItem>
                </Link>
            </div>
        )
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center'
}

export default OrderItem
