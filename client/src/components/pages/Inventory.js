import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container, Row, Col,
    Button
} from 'reactstrap';

import InventoryContainer from '../Inventory/InventoryContainer';
import { getInventory } from '../../api/InventoryAPI';

export class Inventory extends Component {
    state = {
        inventory: []
    };

    componentDidMount() {
        this.setState({ inventory: getInventory() });
    }

    changeQuantity = (id, q) => {
        const inv = [...this.state.inventory.filter(inv => inv.invId === id)];
        this.setState({ [inv.quantity]: q });
        console.log(this.state.inventory);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={headerStyle}>Inventory</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/">
                                <Button color="secondary">Back</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InventoryContainer inventory={this.state.inventory} changeQuantity={this.changeQuantity} />
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

export default Inventory
