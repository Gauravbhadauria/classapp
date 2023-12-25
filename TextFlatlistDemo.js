import {View, Text} from 'react-native';
import React from 'react';

const TextFlatlistDemo = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexWrap: 'wrap', flexDirection: 'row', marginTop: 20}}>
        {[
          'hello',
          'Gaurav',
          'Engineer Codewala',
          'Hello Guys',
          'How are you',
          'Engineer Codewala youtube channel for react native',
        ].map(item => {
          return (
            <Text
              style={{
                backgroundColor: 'blue',
                marginLeft: 20,
                color: 'white',

                marginTop: 10,
                padding: 10,
              }}>
              {item}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default TextFlatlistDemo;
