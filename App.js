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
      total: 0,
      totalItems: 0
    }
    this.addItemToCart = this.addItemToCart.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  calculateTotal() {
    var totalMoney = 0
    this.setState({ 
      total: 0
    }, () => {
      this.state.items.forEach((item) => {
        totalMoney += item['currentPrice'] * item['quantity']
      })
      this.setState({
        total: totalMoney
      })
    })
  }

  countTotalItems() {
    this.setState({
      totalItems:0
    }, () => {
      var sum = 0
      this.state.items.forEach((item) => {
        sum += item['quantity']
      })
      this.setState({
        totalItems: sum
      })
    })
  }

  addToTotalItems(item) {
    this.setState({
      totalItems: this.state.totalItems + item['quantity']
    })
  }

  addItemToCart(id, quantity) {
    var item = _.find(this.state.items, {id: id})
    if(item != null) {
      var index = _.findIndex(this.state.items, {id: id});
      item['quantity'] = item['quantity'] + quantity
      var oldArray = this.state.items;
      var newArray = oldArray.splice(index, 1, item);
      this.setState({
        items: oldArray
      }, () => {
        console.log(this.state.items)
        this.calculateTotal()
        this.countTotalItems()
      })
    } else {
      var item = _.find(products, {id: id})
      item['quantity'] = quantity
      this.setState({
        items: this.state.items.concat(_.find(products, {id: id}))
      }, () => {
        this.calculateTotal()
        this.addToTotalItems(item)
      })
    }
  }

  deleteItem(id) {
    var index = _.findIndex(this.state.items, {id: id});
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items
    }, () => {
      this.setState({
        total: 0,
        totalItems: 0
      }, () => {
        this.calculateTotal()
        this.countTotalItems()
      })
    })
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
        total: this.state.total,
        calculateTotal: this.calculateTotal,
        totalItems: this.state.totalItems,
        deleteItem: this.deleteItem
      }} />
    );
  }
}
