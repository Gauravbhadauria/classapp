import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const Buttons = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 50,
        }}>
        <Text style={{color: 'white'}}>Hello</Text>
        <Text style={{color: 'white', marginLeft: 20}}>Friend</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',

          width: '90%',
          height: 50,
          marginTop: 20,
        }}
        underlayColor={'orange'}
        onPress={() => {}}>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Hello</Text>
          <Text style={{color: 'white', marginLeft: 20}}>Friend</Text>
        </View>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            width: '90%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'cyan',
            marginTop: 20,
          }}>
          <Text style={{color: 'white'}}>Hello</Text>
          <Text style={{color: 'white', marginLeft: 20}}>Friend</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Buttons;
