import {View, Text, FlatList} from 'react-native';
import React from 'react';

const FlatlistDemo = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                marginTop: 20,
              }}>
              {index == 0 && (
                <Text
                  style={{
                    marginLeft: 15,
                    marginBottom: 10,
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  Trending Products
                </Text>
              )}
              {index == 0 && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 1, 1, 1]}
                  renderItem={data => {
                    return (
                      <View
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: '#9e9e9e',
                          marginLeft: 10,
                          borderRadius:10
                        }}></View>
                    );
                  }}></FlatList>
              )}
              {index == 1 && (
                <Text
                  style={{
                    marginLeft: 15,
                    marginBottom: 10,
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  New Products
                </Text>
              )}
              {index == 1 && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 1, 1, 1]}
                  renderItem={data => {
                    return (
                      <View
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: '#9e9e9e',
                          marginLeft: 10,
                          borderRadius:10
                        }}></View>
                    );
                  }}></FlatList>
              )}
               {index == 2 && (
                <Text
                  style={{
                    marginLeft: 15,
                    marginBottom: 10,
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                 All Products
                </Text>
              )}
              {index == 2 && (
                <FlatList
                  data={[1, 1, 1, 1,1,1,1,1,1,1]}
                  renderItem={data => {
                    return (
                      <View
                        style={{
                          width: '94%',
                          height: 100,
                          marginTop: 10,
                          backgroundColor: '#9e9e9e',
                        
                          alignSelf: 'center',
                          borderRadius:10
                        }}></View>
                    );
                  }}></FlatList>
              )}
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 100,
                backgroundColor: 'orange',
              }}></View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 100,
                backgroundColor: 'orange',
              }}></View>
          );
        }}
      />
    </View>
  );
};

export default FlatlistDemo;
