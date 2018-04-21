import React, { Component} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

class QuantityPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.quantityPicker}>
        <Text style={{
          color: 'rgb(176, 176, 176)'
        }}>Qty</Text>
        <TextInput
          value={this.props.quantity}
          style={styles.TextInputStyle}
          keyboardType='numeric'
          maxLength={3}
          onChangeText={(quantity) => {this.props.setQuantity(quantity)}}
          returnKeyType="done"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInputStyle: {
    width: 30,
    borderWidth: 0.8,
    borderColor: 'rgba(176, 176, 176, 0.4)',
    borderRadius: 2,
    textAlign: 'center',
  },
})

export default QuantityPicker;
