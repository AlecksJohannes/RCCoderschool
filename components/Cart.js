import React, { Component} from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';
import CartList from './CartList';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0
    }
  }
 
  render() {
    const titleConfig = {
      title: 'Cart',
      tintColor: 'white', 
      style: {backgroundColor: 'rgb(19, 125, 193)'}
    };

    return (
      <View>
        <View style={{
          borderBottomWidth: 0.7,
          borderBottomColor: 'grey'
        }}>
          <NavigationBar
            title={titleConfig}
            style={{backgroundColor: 'rgb(19, 125, 193)'}}
          />
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 15}}> Est. total: ${this.props.screenProps.total} </Text>
          <TouchableOpacity style={styles.checkOutButton}>
            <Text style={styles.checkOutText}> Check Out ({this.props.screenProps.totalItems}) </Text>
          </TouchableOpacity>
        </View>
        <CartList items={this.props.screenProps.items} deleteItem={this.props.screenProps.deleteItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   checkOutButton: {
    backgroundColor: '#fa6400',
    paddingVertical: 10,
    borderRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12,
    marginBottom: 15
  },
   checkOutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  }
})

export default Cart;
