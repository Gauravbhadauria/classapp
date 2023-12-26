import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [badName, setBadName] = useState('');
  const [badMobile, setBadMobile] = useState('');
  const mobileRef = useRef();

  const validate = () => {
    if (name == '') {
      setBadName('Enter Your Name Please');
    } else if (name.length < 2) {
      setBadName('Please Enter Valid Name');
    } else if (name != '' && name.length > 2) {
      setBadName('');
    }

    if (mobile == '') {
      setBadMobile('Enter Your Mobile Please');
    } else if (mobile.length < 10) {
      setBadMobile('Please Enter Valid Mobile');
    } else if (mobile != '' && mobile.length == 10) {
      setBadMobile('');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: badName != '' ? 'red' : 'black',
          borderRadius: 10,
          paddingLeft: 15,
          color: 'black',
        }}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        onSubmitEditing={() => {
          mobileRef.current.focus();
        }}
        returnKeyType="next"
        // maxLength={10}
      />
      {badName != '' && (
        <Text
          style={{
            color: 'red',
            marginLeft: 25,
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          {badName}
        </Text>
      )}
      <TextInput
        ref={mobileRef}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: badMobile != '' ? 'red' : 'black',
          borderRadius: 10,
          paddingLeft: 15,
          color: 'black',
          marginTop: 30,
        }}
        placeholder="Enter Mobile"
        value={mobile}
        onChangeText={text => {
          setMobile(text);
        }}
        keyboardType="number-pad"
        maxLength={10}
      />
      {badMobile != '' && (
        <Text
          style={{
            color: 'red',
            marginLeft: 25,
            alignSelf: 'flex-start',
            marginTop: 5,
          }}>
          {badMobile}
        </Text>
      )}
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          validate();
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputDemo;

//value
//onChangeText
//placeholder
//style
//onBlur
//onFocus
//keyboardType
//maxLength
//editable
//autoFocus
//secureTextEntry
//onSubmit
//
