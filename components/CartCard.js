import React, { Component} from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Price from './Price';
import CartPricingItem from './CartPricingItem';

class CartCard extends Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.productCard}>
          <Image style={{width: 100, height: 100}} source={{uri: this.props.photo}}/>
          <View style={styles.productInfo}>
            <Text style={{fontWeight: 'bold'}}> 
              {this.props.name}
            </Text>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 15, paddingBottom: 15}}>
              <Text style={{fontWeight: 'bold', color: 'grey'}}>Sold by:</Text>
              <Text style={{color: 'grey'}}> WalMart.com</Text>
            </View>
            <Text style={styles.shippingText}> 
              {this.props.ship}
            </Text>
            <View style={styles.pricingAndQuantity}>
              <CartPricingItem quantity={this.props.quantity} currentPrice={this.props.currentPrice}/>
            </View>
          </View>
        </View>
        <View style={{flex: 1, height: 40, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.saveForLater}>
            <Text style={{ color: 'black', width: 60, textAlign: 'center'}}> {this.props.quantity} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveForLater}>
            <Text style={{color: 'rgb(18, 121, 188)', fontWeight: 'bold', paddingLeft: 25, paddingRight: 25}}> SAVE FOR LATER </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: 'white',
          }}
          onPress={() => {this.props.deleteItem(this.props.id)}}
          >
            <Image
              style={styles.stretch}
              resizeMode="contain"
              source={require('../delete3.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    flex: 1,
    height: null,
  },
  productInfo: {
    flex: 1, 
    flexWrap: 'wrap'
  },
  productCard: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  pricingAndQuantity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shippingText: {
    color: 'green',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  saveForLater: {
    borderWidth: 1.5,
    borderColor: 'rgb(59, 149, 199)',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 4,
  },
   saveForLaterText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  close: {
    borderWidth: 1.5,
    borderColor: 'rgb(59, 149, 199)',
    backgroundColor: 'white',
    width: 40,
    height: 40,
  }
})

export default CartCard;
