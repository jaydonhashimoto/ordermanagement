import React, { Component } from 'react';
import {
    Container, Row, Col, Button
} from 'reactstrap';

export class InventoryItem extends Component {
    state = {
        name: this.props.invItem.name,
        cost: this.props.invItem.cost,
        quantity: this.props.invItem.quantity
    }

    changeQuantity = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.props.changeQuantity(this.props.invItem.invId, this.state.quantity);
    }

    reduceQuantity = () => {
        this.setState({ quantity: this.state.quantity - 1 });
    }

    increaseQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 });

    }

    render() {
        const { cost, name } = this.props.invItem;
        return (
            <div>
                <Container>
                    <Row>
                        <Col><p style={textStyle}>{name}(${cost})</p></Col>
                        <Col>
                            <input
                                type="number"
                                name="quantity"
                                min="1"
                                max="100"
                                step="1"
                                value={this.state.quantity}
                                onChange={this.changeQuantity}
                            />
                        </Col>
                        <Col>
                            <Button onClick={this.increaseQuantity}>+</Button>{' '}
                            <Button onClick={this.reduceQuantity}>-</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const textStyle = {
    textAlign: 'center'
}

export default InventoryItem
