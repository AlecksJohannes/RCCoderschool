import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CartPricingItem extends Component {
  constructor(props) {
    super(props);
  }

  renderElem() {
    if (this.props.quantity != 1) {
    return(
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          ${parseFloat(this.props.currentPrice * this.props.quantity).toFixed(2)}
        </Text>
        <Text style={{paddingTop: 10, fontSize: 14}}>${parseFloat(this.props.currentPrice).toFixed(2)} each</Text>
      </View>)
    } else {
      return(
      <Text style={{paddingTop: 10, fontSize: 14}}>${parseFloat(this.props.currentPrice).toFixed(2)}</Text>)
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 10}}>
          {this.renderElem()}
        </View>
      </View>
    );
  }
}

export default CartPricingItem;
