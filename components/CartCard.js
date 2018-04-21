import React, { Component} from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Price from './Price';

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
            <Text> 
              {this.props.name}
            </Text>
            <Text style={styles.shippingText}> 
              {this.props.ship}
            </Text>
            <View style={styles.pricingAndQuantity}>
              <Price currentPrice={this.props.currentPrice} originPrice={this.props.originPrice}/>
            </View>
          </View>

        </View>
       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
         <TouchableOpacity style={styles.saveForLater}>
           <Text style={{ color: 'black', width: 60, textAlign: 'center'}}> {this.props.quantity} </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.saveForLater}>
           <Text style={{color: 'rgb(61, 144, 200)', fontWeight: 'bold'}}> SAVE FOR LATER </Text>
         </TouchableOpacity>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  productInfo: {
    flex: 1, flexWrap: 'wrap'
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
    fontStyle: 'italic'
  },
    saveForLater: {
    borderWidth: 0.8,
    borderColor: 'rgb(59, 149, 199)',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 2,
  },
   saveForLaterText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  close: {
    borderWidth: 0.8,
    borderColor: 'rgb(59, 149, 199)',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 30,
  }
})

export default CartCard;
