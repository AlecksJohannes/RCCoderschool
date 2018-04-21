import React, { Component} from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';
import CartList from './CartList';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleConfig = {
      title: 'Cart',
      tintColor: 'white', 
      style: {backgroundColor: 'blue'}
    };

    return (
      <View>
        <NavigationBar
          title={titleConfig}
          style={{backgroundColor: 'blue'}}
        />
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 15}}> Est. total: ${this.props.screenProps.total} </Text>
      <TouchableOpacity style={styles.checkOutButton}>
        <Text style={styles.checkOutText}> Check Out ({this.props.screenProps.items.length}) </Text>
      </TouchableOpacity>
        <CartList items={this.props.screenProps.items}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   checkOutButton: {
    backgroundColor: '#fa6400',
    paddingVertical: 10,
    borderRadius: 2,
  },
   checkOutText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Cart;
