import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

const WelcomeIntro = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={data}
          horizontal
          ref={ref}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 50}}
          onScroll={e => {
            console.log(e.nativeEvent.contentOffset.x);
            //e.nativeEvent.contentOffset.x
            //itemIndex=e.nativeEvent.contentOffset.x/itemWidth

            const ind = (
              e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            ).toFixed(0);

            setCurrentIndex(ind);
          }}
          renderItem={x => {
            return (
              <View
                style={{
                  width: Dimensions.get('window').width,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: x.index % 2 == 0 ? 'red' : 'green',
                    width: '90%',
                    height: '100%',
                  }}></View>
              </View>
            );
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 2.5,
                backgroundColor: currentIndex == index ? 'red' : 'black',
                marginLeft: 10,
              }}></View>
          );
        })}
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bottom: 10,
          flexDirection: 'row',
        }}>
        {currentIndex > 0 && (
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              ref.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 1,
              });
              setCurrentIndex(currentIndex - 1);
            }}>
            <Text>Previous</Text>
          </TouchableOpacity>
        )}
        {currentIndex < data.length - 1 && (
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              ref.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) + 1,
              });
              setCurrentIndex(currentIndex + 1);
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        )}
        {currentIndex == data.length - 1 && (
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
             //go to next 
            }}>
            <Text>Go to Dashboard</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default WelcomeIntro;

//data
//renderItem
//horizontal/vertical
//numberOfColumn  --  vertical
//keyExtrator --
//listFooterComponent
//listHeaderComponent
//style
//contentContainerStyle
//ref
//pagingEnabled
//onScroll
