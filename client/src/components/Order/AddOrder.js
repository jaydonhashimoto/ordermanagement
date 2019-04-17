import React, { Component } from 'react';
import {
    Container, Row, Col,
    Button,
    Modal, ModalBody, ModalHeader, ModalFooter,
    Form, FormGroup, Label, Input
} from 'reactstrap';

import { addOrder } from '../../api/OrderAPI';

export class AddOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            order: []
        };
        //bind 'this' to toggle
        this.toggle = this.toggle.bind(this);
    }

    /**
     * toggle modal
     */
    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    /**
     * set state of each order item
     */
    onChange = (e) => {
        this.setState({
            order: {
                ...this.state.order,
                [e.target.name]: e.target.value
            }
        });
    }

    /**
     * pass order into addOrder method
     */
    onSubmit = (e) => {
        e.preventDefault();
        addOrder(this.state.order);
        this.toggle();
    }

    render() {
        //add modal
        return (
            <div>
                <Container>
                    <Row>
                        <Col><Button color="success" onClick={this.toggle} style={buttonStyle}>Add Order</Button></Col>
                    </Row>
                </Container>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Customer Order</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit} autoComplete="off">
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="price">Price</Label>
                                        <Input
                                            type="text"
                                            name="price"
                                            placeholder="Price"
                                            value={this.state.price}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="quantity">Quantity</Label>
                                        <Input
                                            type="text"
                                            name="quantity"
                                            placeholder="Quantity"
                                            value={this.state.quantity}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input
                                            type="textarea"
                                            name="description"
                                            placeholder="Order Description"
                                            value={this.state.description}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input type="submit" value="Add Customer Order" />
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const buttonStyle = {
    width: '100%'
};

export default AddOrder
