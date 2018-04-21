import React, { Component, } from 'react';
import products from '../products';
import {FlatList, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import CartCard from './CartCard';

class CartList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {width, height} = Dimensions.get('window')
    return (
        <FlatList
          style={{width: width, height: height* 0.6, marginTop: 10}}
          data={this.props.items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <CartCard {...item} deleteItem={this.props.deleteItem} />}
        />
    );
  }
}

const styles = StyleSheet.create({
  productList: {
    flexGrow: 0,
  }
})

export default CartList;
