import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {
    Alert,
    Button,
    Form, FormGroup, Label, Input,
    Container, Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { updateOrder, deleteOrder } from '../../api/OrderAPI';

export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            visible: false,
            order: this.props.location.state.order,
            deleted: false
        };
        //bind 'this' to toggle and onDismiss
        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    /**
     * toggle modal
     */
    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    /**
     * set alert to false
     */
    onDismiss() {
        this.setState({ visible: false });
    }

    /**
     * set update order state
     */
    onChange = (e) => {
        //set state
        this.setState({
            order: {
                ...this.state.order,
                [e.target.name]: e.target.value
            }
        })
    }

    /**
     * show alert and update order
     */
    onSubmit = (e) => {
        e.preventDefault();
        //call edit order api
        this.setState({ visible: true });
        updateOrder(this.state.order);
    }

    /**
     * call deleteOrder and toggle modal
     */
    onDelete = (id) => {
        //call delete order api
        deleteOrder(id);
        this.toggle();
        //redirect to orders screen
        this.setState({deleted: true});
    }

    render() {
        const { _id, date, name, quantity, price, description } = this.state.order;
        const d = new Date(date);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(d);
        if(this.state.deleted) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <Container>
                    <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                        Order Saved
                    </Alert><br />
                    <Form onSubmit={this.onSubmit} autoComplete="off">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="orderNum"><b>Order Number</b></Label>
                                    <p>{_id}</p>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="date"><b>Date Added</b></Label>
                                    <p>{formattedDate}</p>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="name"><b>Name</b></Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={this.onChange}
                                        maxLength="30"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="price"><b>Price</b></Label>
                                    <Input
                                        type="text"
                                        name="price"
                                        placeholder="Price"
                                        value={price}
                                        onChange={this.onChange}
                                        maxLength="10"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="quantity"><b>Quantity</b></Label>
                                    <Input
                                        type="text"
                                        name="quantity"
                                        placeholder="Quantity"
                                        value={quantity}
                                        onChange={this.onChange}
                                        maxLength="6"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="description"><b>Description</b></Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        placeholder="Order Description"
                                        value={description}
                                        onChange={this.onChange}
                                        maxLength="200"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/">
                                    <Button color="secondary" style={buttonStyle}>Back</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button color="danger" onClick={this.toggle} style={buttonStyle}>Remove</Button>
                            </Col>
                            <Col>
                                <Button color="primary" style={buttonStyle}>Save</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Confirmation</ModalHeader>
                        <ModalBody>
                            Are you sure you want to remove
                            this order?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.onDelete.bind(this, _id)}>Remove</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </div>
        )
    }
}

const buttonStyle = {
    width: '5rem'
};

export default Order
