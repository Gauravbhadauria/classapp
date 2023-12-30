import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';

const Buttons2 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '90%',
          height: moderateScale(50),
          backgroundColor: clicked ? 'orange' : 'red',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 200);
        }}
        onLongPress={() => {
          if (clicked) {
            setClicked(false);
          } else {
            setClicked(true);
          }
        }}>
        <Text style={{color: 'black'}}>hello</Text>
        <Text style={{marginLeft: 20, color: 'black'}}>Friend</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'red',
          marginTop: 20,
        }}
        underlayColor={'orange'}
        activeOpacity={0.9} //child ke background ko change krta
        onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <Text style={{color: 'white'}}>hello</Text>
          <Text style={{marginLeft: 20, color: 'white'}}>Friend</Text>
        </View>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: 50,
            marginTop: 20,
            backgroundColor: 'blue',
          }}>
          <Text style={{color: 'white'}}>hello</Text>
          <Text style={{marginLeft: 20, color: 'white'}}>Friend</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Buttons2;

//native Button ---native default buttons
//style

//touchables
//touchableOpacity ----multiple child allow
//touchableHighlight  ---single child allow
//touchableWithoutFeedback ---single child allow
