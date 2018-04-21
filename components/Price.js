import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View styles={styles.price}>
        <Text>Price</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.currentPrice}>
            ${this.props.currentPrice}
          </Text>
          <Text style={styles.oldPrice}>was ${this.props.originPrice}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currentPrice: {
    color: 'rgb(249, 138, 36)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  oldPrice: {
    color: 'red',
    textDecorationLine: 'line-through',
  }
})

export default Price;
