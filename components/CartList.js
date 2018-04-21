import React, { Component, } from 'react';
import products from '../products';
import {FlatList, View, StyleSheet} from 'react-native';
import CartCard from './CartCard';

class CartList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.productList}>
        <FlatList
          data={this.props.items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <CartCard {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productList: {
    marginTop: 20
  }
})

export default CartList;
