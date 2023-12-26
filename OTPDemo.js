import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

const OTPDemo = () => {
  const [ip1, setIp1] = useState('');
  const [ip2, setIp2] = useState('');
  const [ip3, setIp3] = useState('');
  const [ip4, setIp4] = useState('');
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);
  const [focused4, setFocused4] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [badOPT, setBadOTP] = useState('');

  const validateOtp = () => {
    let otp = '5454';

    let currentOTP = ip1 + ip2 + ip3 + ip4;
    if (currentOTP == '') {
      setBadOTP('Please Enter OTP');
    } else if (
      currentOTP != '' &&
      currentOTP.length == 4 &&
      currentOTP != otp
    ) {
      setBadOTP('Wrong OTP Entered');
    } else if (currentOTP.length < 4) {
      setBadOTP('Please Enter 4 Digit OTP');
    } else if (
      currentOTP != '' &&
      currentOTP.length == 4 &&
      currentOTP == otp
    ) {
      setBadOTP('');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '90%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TextInput
          ref={ref1}
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            borderColor: focused1 || ip1.length > 0 ? 'green' : 'black',
          }}
          onFocus={() => {
            setFocused1(true);
          }}
          onBlur={() => {
            setFocused1(false);
          }}
          value={ip1}
          onSubmitEditing={() => {}}
          onChangeText={txt => {
            if (txt.length == 1) {
              ref2.current.focus();
            }
            setIp1(txt);
          }}
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          ref={ref2}
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            borderColor: focused2 || ip2.length > 0 ? 'green' : 'black',
          }}
          onFocus={() => {
            setFocused2(true);
          }}
          onBlur={() => {
            setFocused2(false);
          }}
          value={ip2}
          onChangeText={txt => {
            if (txt.length == 1) {
              ref3.current.focus();
            } else {
              ref1.current.focus();
            }

            setIp2(txt);
          }}
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          ref={ref3}
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            borderColor: focused3 || ip3.length > 0 ? 'green' : 'black',
          }}
          importantForAutofill="auto"
          onFocus={() => {
            setFocused3(true);
          }}
          onBlur={() => {
            setFocused3(false);
          }}
          value={ip3}
          onChangeText={txt => {
            if (txt.length == 1) {
              ref4.current.focus();
            } else {
              ref2.current.focus();
            }
            setIp3(txt);
          }}
          maxLength={1}
          keyboardType="number-pad"
        />
        <TextInput
          ref={ref4}
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            borderColor: focused4 || ip4.length > 0 ? 'green' : 'black',
          }}
          onFocus={() => {
            setFocused4(true);
          }}
          onBlur={() => {
            setFocused4(false);
          }}
          value={ip4}
          onChangeText={txt => {
            if (txt.length < 1) {
              ref3.current.focus();
            }

            setIp4(txt);
          }}
          maxLength={1}
          keyboardType="number-pad"
        />
      </View>
      {badOPT != '' && (
        <Text
          style={{
            color: 'red',

            marginTop: 10,
          }}>
          {badOPT}
        </Text>
      )}
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          validateOtp();
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPDemo;
