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
              {  key: 1, label: 1 },
              {  key: 2, label: 2 },
              {  key: 3, label: 3 },
              {  key: 4, label: 4 },
              {  key: 5, label: 5 }
            ]}
          initValue="Qty"
          onChange={(option)=>{ this.props.setQuantity(option.key) }} />
      </View>
    );
  }
}

export default QuantityPicker;
