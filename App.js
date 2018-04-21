import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NavigationBar from 'react-native-navbar';
import { TabNavigator } from 'react-navigation';
import products from './products';
import _ from 'lodash';
import update from 'immutability-helper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      quantity: "1",
      total: 0
    }
    this.addItemToCart = this.addItemToCart.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  calculateTotal() {
    this.state.items.forEach((item) => {
      this.setState({total: this.state.total + item.currentPrice * item.quantity})
    })
  }

  addItemToCart(id) {
    var item = _.find(this.state.items, {id: id})
    if(item) {
      var index = _.findIndex(this.state.items, {id: id});
      item['quantity'] = parseInt(item['quantity']) + parseInt(this.state.quantity)
      var oldArray = this.state.items;
      var newArray = oldArray.splice(index, 1, item);
      this.setState({
        items: oldArray
      }, () => {
        this.calculateTotal()
      })
    } else {
      var item = _.find(products, {id: id})
      item['quantity'] = parseInt(this.state.quantity)
      this.setState({
        items: this.state.items.concat(_.find(products, {id: id}))
      }, () => {
        this.calculateTotal()
      })
    }
  }

  setQuantity(quantity) {
    this.setState({
      quantity: quantity
    })
  }

  render() {
    const App = TabNavigator({
      ProductList: { screen: ProductList },
      Cart: { screen: Cart },
    }, {
        swipeEnabled: true,
        tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: 'rgb(34, 119, 203)',
        inactiveBackgroundColor: 'white',
        activeBackgroundColor: 'rgb(34, 119, 203)',
        showIcon: false,
        indicatorStyle: {
          borderBottomColor: '#ffffff',
          borderBottomWidth: 2,
        },
        labelStyle:{
          fontSize: 15,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style:{
          backgroundColor: '#353539',
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        }
      },
    });

    return (
      <App screenProps={{items: this.state.items, 
      addItemToCart: this.addItemToCart, 
      setQuantity: this.setQuantity,
      total: this.state.total,
      calculateTotal: this.calculateTotal,
      quantity: this.state.quantity}} />
    );
  }
}
