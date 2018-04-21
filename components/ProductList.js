import React, { Component, } from 'react';
import products from '../products';
import {FlatList, View, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';

class ProductList extends Component {
  static navigationOptions = {
    title: 'List',
    headerTitleStyle: { 
      color: 'white', 
      fontWeight: 'bold'
    },
    headerStyle: {
      backgroundColor: 'rgb(34, 119, 203)'
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const titleConfig = {
      title: 'Cart',
      tintColor: 'white',
      style: {
        fontWeight: 'bold'
      }
    };
    return (
      <View style={styles.productList}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ProductCard {...item} navigation={this.props.navigation} screenProps={this.props.screenProps} />}
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

export default ProductList;
