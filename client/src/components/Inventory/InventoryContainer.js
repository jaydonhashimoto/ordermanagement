import React, { Component } from 'react';
import InventoryItem from './InventoryItem';

export class InventoryContainer extends Component {
    render() {
        return this.props.inventory.map((invItem) => (
            <InventoryItem key={invItem.invId} invItem={invItem} changeQuantity={this.props.changeQuantity} />
        ));
    }
}

export default InventoryContainer
