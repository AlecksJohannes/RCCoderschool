import React, { Component} from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Price from './Price';
import QuantityPicker from './QuantityPicker';

class ProductCard extends Component {
  constructor(props) {
   super(props);
   this.state = {
    quantity: 1
   }
  }

  addToCart() {
    const { navigate } = this.props.navigation;
    this.props.screenProps.addItemToCart(this.props.id, this.state.quantity)
  }

  setQuantity(quantity) {
    this.setState({
      quantity: quantity
    })
  }

  render() {
    return (
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
            <QuantityPicker setQuantity={this.setQuantity.bind(this)} />
          </View>
          <TouchableOpacity style={styles.addToCart}>
            <Button
              title="Add to Cart"
              style={styles.addToCart}
              color="white"
              onPress={() => {
                this.addToCart()
              }}
            />
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
    paddingTop: 10,
    paddingBottom: 10
  },
  addToCart: {
    backgroundColor: 'rgb(34, 119, 203)',
    borderRadius: 5
  }
})

export default ProductCard;
