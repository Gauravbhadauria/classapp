import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';

const FlatListDemo2 = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        renderItem={({item, index}) => {
          return (
            <View style={{width: '100%', marginTop: 20}}>
              {index == 0 && (
                <View
                  style={{
                    width: '90%',
                    height: 150,
                    backgroundColor: '#939393',
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                  }}></View>
              )}
              {index == 1 && (
                <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 15}}>
                  Categories
                </Text>
              )}
              {index == 1 && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3, 4, 4]}
                  style={{marginTop: 10}}
                  renderItem={data1 => {
                    return (
                      <View
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 10,
                          backgroundColor: '#993939',
                          marginLeft: 10,
                        }}></View>
                    );
                  }}
                />
              )}
              {index == 2 && (
                <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 15}}>
                  Trending Items
                </Text>
              )}
              {index == 2 && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3, 4, 4]}
                  style={{marginTop: 10}}
                  renderItem={data1 => {
                    return (
                      <View
                        style={{
                          width: 200,
                          height: 150,
                          borderRadius: 10,
                          backgroundColor: '#993939',
                          marginLeft: 10,
                        }}></View>
                    );
                  }}
                />
              )}
              {index == 3 && (
                <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 15}}>
                  New Products
                </Text>
              )}
              {index == 3 && (
                <FlatList
                  data={[1, 2, 3, 4, 4]}
                  style={{marginTop: 10}}
                  renderItem={data1 => {
                    return (
                      <View
                        style={{
                          width: '94%',
                          height: 150,
                          borderRadius: 10,
                          backgroundColor: '#993939',

                          alignSelf: 'center',
                          marginTop: 10,
                        }}></View>
                    );
                  }}
                />
              )}
              {index == 4 && (
                <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 15}}>
                  Searched categories
                </Text>
              )}
              
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListDemo2;

// ------ ----- -------------
