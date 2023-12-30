import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import {moderateScale, moderateVerticalScale} from './scalings';

const {width, height} = Dimensions.get('window');
console.log(width + ' ' + height);
const ResponsiveDemo = () => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  //padding,margin,fontSize ,-  (moderateScale - horizontal)   paddinTop,marginTop,marginBottom ,paddingBottom -- moderateVerticalScale(100)
  return (
    <ScrollView
      onScroll={e => {
        console.log(e.nativeEvent.contentOffset.y);
      }}
      ref={ref}
      style={{flex: 1}}>
      <Text
        style={{
          fontSize: moderateScale(20),
          color: 'black',
          alignSelf: 'center',
          fontWeight: '600',
          marginTop:
            Platform.OS == 'ios'
              ? moderateVerticalScale(30)
              : moderateVerticalScale(50),
        }}>
        {'Sign Up'}
      </Text>
      <TextInput
        ref={ref1}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(50),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Username"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref2.current.focus();
          //ref.current.scrollTo({X: 0, y: 150, animated: true});
          ref.current.scrollToEnd({animated: true});
        }}
      />
      <TextInput
        ref={ref2}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Email"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref3.current.focus();
          ref.current.scrollTo({X: 0, y: 200, animated: true});
        }}
      />
      <TextInput
        ref={ref3}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Mobile"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref4.current.focus();
          ref.current.scrollTo({X: 0, y: 250, animated: true});
        }}
      />
      <TextInput
        ref={ref4}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Password"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref5.current.focus();
          ref.current.scrollTo({X: 0, y: 350, animated: true});
        }}
      />
      <TextInput
        ref={ref5}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Password"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref6.current.focus();
          ref.current.scrollTo({X: 0, y: height, animated: true});
        }}
      />
      <TextInput
        ref={ref6}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Password"
        returnKeyType="next"
        onSubmitEditing={() => {
          // ref2.current.focus();
          ref.current.scrollTo({X: 0, y: 550, animated: true});
        }}
      />
       <TextInput
        ref={ref4}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Password"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref5.current.focus();
          ref.current.scrollTo({X: 0, y: 350, animated: true});
        }}
      />
       <TextInput
        ref={ref4}
        style={{
          width: '90%',
          height: '6.5%',
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(10),
        }}
        placeholder="Enter Password"
        returnKeyType="next"
        onSubmitEditing={() => {
          ref5.current.focus();
          ref.current.scrollTo({X: 0, y: 350, animated: true});
        }}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: '6.5%',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          borderRadius: moderateScale(10),
        }}>
        <Text style={{color: 'white', fontSize: moderateScale(18)}}>
          Register
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResponsiveDemo;

// width- scale
//height - verticalScale
// marginLeft,marginRight ,paddingLeft,paddingRight- moderateScale
//marginTop,marginBottom,paddingTop,paddingBottom - modertaeVeticalScale
