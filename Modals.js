import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
const Modals = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Open Modal"
        onPress={() => {
          setOpenModal(true);
        }}
      />
      {/* <Modal
        onRequestClose={() => {
          setOpenModal(false);
        }}
        visible={openModal}
        transparent
        style={{flex: 1}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,.2)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPress={() => {
            setOpenModal(false);
          }}>
          <View
            style={{
              width: '90%',
              height: 200,
              backgroundColor: 'white',
            }}>
            <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 20}}>
              Do you want to log out?
            </Text>
            <Button title="Log Out" />
          </View>
        </TouchableOpacity>
      </Modal> */}
      <Modal
        isVisible={openModal}
        backdropOpacity={0.2}
        onBackdropPress={() => {
          setOpenModal(false);
        }}
        animationInTiming={1000}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        style={{justifyContent: 'center', alignItems: 'center',margin:0}}>
        <View
          style={{
            width: '100%',
            height: 200,
            backgroundColor: 'white',
            position:'absolute',
            bottom:0,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
          }}>
          <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 20}}>
            Do you want to log out?
          </Text>
         
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
