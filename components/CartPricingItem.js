import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CartPricingItem extends Component {
  constructor(props) {
    super(props);
  }

  renderElem() {
    console.log(this.props.quantity)
    if (this.props.quantity != 1) {
    return(
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          ${this.props.currentPrice * this.props.quantity}
        </Text>
        <Text style={{paddingTop: 10, fontSize: 14}}>${this.props.currentPrice} each</Text>
      </View>)
    } else {
      return(
      <Text style={{paddingTop: 10, fontSize: 14}}>${this.props.currentPrice}</Text>)
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          {this.renderElem()}
        </View>
      </View>
    );
  }
}

export default CartPricingItem;
