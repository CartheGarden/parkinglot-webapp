import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import { CenteredText, Footer } from "../../components";
import { InfoModalScreen } from '.';

export default function ParkingLotUsageScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  //TODO: Get Usage id by url param and Call GetUsage(id)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>이용정보</Text>
        <Modal
          visible={modalVisible}
          animationType='none'
          transparent={true}
          onRequestClose={()=>setModalVisible(!modalVisible)}
        >
          <InfoModalScreen
            onPressClose={()=>setModalVisible(!modalVisible)}
          />
        </Modal>
        <TouchableOpacity
          onPress = {() => setModalVisible(true)}
        >
          <Text style={styles.infoButton}>
            상세 정보 보기
            <Icon name="chevron-forward"/>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={[styles.subview, {flex: .8}]}>
          <View style={[styles.subviewContent, {height: 90}]}>
            <Text style={styles.subviewContentText}>B3층 C구역 25번</Text>
          </View>
          <CenteredText text="주차구역" style={styles.subviewTitle} textStyle={{color: Colors.white, fontSize: 20}}/>
        </View>
        <View style={[styles.subview, {flex: 1}]}>
          <View style={[styles.subviewContent, {height: 130}]}>
            <Text style={styles.subviewContentText}>5시간 45분</Text>
            <Text style={[styles.subviewContentText, {fontSize: 18}]}>입차: 2022.01.19 12:10</Text>
          </View>
          <CenteredText text="이용시간" style={styles.subviewTitle} textStyle={{color: Colors.white, fontSize: 20}}/>
        </View>
        <View style={styles.chargeInfo}>
          <Text style={[styles.textStyle, {backgroundColor: 'rgba( 249, 168, 48, 0.8 )'}]}>결제금액</Text>
          <Text style={styles.textStyle}>2000원</Text>
        </View>
        <View style={styles.chargeMsg}>
          <Text style={{color: Colors.white}}>#출차 후 결제 안내 메시지가 전송됩니다</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Image source={require('../../assets/images/logoWhite.png')} resizeMode='contain' style={{width: '100%', height: '100%', }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  header: {
    flex: .5,
    alignItems: 'center',
    marginTop: 60,
  },
  infoButton: {
    color: Colors.secondary,
    marginBottom: 30,
  },
  textStyle: {
    fontFamily: 'DoHyeon',
    fontSize: 25,
    color: Colors.white,
  },
  body: {
    flex: 3,
    width: '75%',
  },
  subview: {
    alignItems: 'center',
    marginTop: 10,
  },
  subviewTitle: {
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    width: '75%',
    height: 55,
    left: '12.5%',
  },
  subviewContent: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    width: '100%',
    height: 100,
    top: 30,
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      height: 7,
      width: 7,
    },
  },
  subviewContentText: {
    fontFamily: 'DoHyeon',
    fontSize: 20,
    marginTop: 20,
    color: Colors.black,
  },
  chargeInfo: {
    flex: .4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chargeMsg: {
    flex: .2,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '18%',
    // position: 'absolute',
    bottom: '0px',
  }
});
