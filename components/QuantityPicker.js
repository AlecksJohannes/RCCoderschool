import React, { Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

class QuantityPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ModalSelector
          data={[
              {  key: 1, label: "Quantity: 1" },
              {  key: 2, label: "Quantities: 2" },
              {  key: 3, label: "Quantities: 3" },
              {  key: 4, label: "Quantities: 4" },
              {  key: 5, label: "Quantities: 5" }
            ]}
          initValue="Qty" />
      </View>
    );
  }
}

export default QuantityPicker;
