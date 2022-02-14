import React, { useEffect, useState } from 'react';
import { Dimensions ,StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { CenteredText, Footer } from '../../components';
import Modal from 'react-native-modal';
import * as Font from "expo-font";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ParkingLotInfo'>

export default function ParkingLotInfoScreen({route}) {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);

  Font.loadAsync({
    DoHyeon: require('../../assets/fonts/DoHyeon.ttf')
  })

  useEffect(() => {
    console.log(route.params.naverId);
    console.log(route.params.name);
    console.log(route.params.email);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.body__title}>
          <CenteredText text="율전 공용주차장" style={{}} textStyle={{color: '#005629', fontSize: 28}}/>
        </View>
        <View style={styles.body__information}>
          <View style={styles.textBox__title}>
            <Text style={styles.title__text}>주차장 정보</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBox__subTitle}>운영시간</Text>
            <Text style={styles.subTitle__text}>09:00 ~ 17:00</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBox__subTitle}>위치</Text>
            <Text style={styles.subTitle__text}>수원시 장안구 화산로 213번길</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBox__subTitle}>관리자 번호</Text>
            <Text style={styles.subTitle__text}>010-1111-2222</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#808080',
            borderBottomWidth: 1,
            width: '85%',
            alignSelf: 'center',
            marginBottom: 15,
          }}
        />
        <View style={styles.body__charge}>
          <View style={styles.textBox__title}>
            <Text style={styles.title__text}>요금 안내</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBox__subTitle}>기본 요금</Text>
            <Text style={styles.subTitle__text}>1시간/2000원</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBox__subTitle}>추가 요금</Text>
            <Text style={styles.subTitle__text}>10분/25원</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.textBox__subTitle}>할증 요금</Text>
            <Text style={styles.subTitle__text}>-</Text>
          </View>
        </View>
        <View style={styles.body__footer}>
          <Text style={{fontSize: 15, color: '#808080', marginBottom:15}}>업데이트: 2022-01-19</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={()=>{navigation.navigate('ParkingLotUsage')}}
              style={{backgroundColor: '#F9A830', borderRadius:10, alignItems:'center', justifyContent:'center', flex:.45}}
            >
              <Text style={{color: '#FFF', fontFamily: 'DoHyeon', fontSize:20}}>주차하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{setModalVisible(true)}}
              style={{borderColor: '#F9A830', borderWidth:3, borderRadius:10, alignItems:'center',justifyContent:'center', flex:.45}}
            >
              <Text style={{color: '#F9A830', fontFamily: 'DoHyeon', fontSize:20}}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={()=>{setModalVisible(false)}}
      >
        <View style={styles.modal}>
          <Text style={{fontFamily: 'DoHyeon', fontSize:25, marginBottom: 20}}>취소하시겠습니까?</Text>
          <View style={styles.modal__button}>
            <TouchableOpacity
              onPress={()=>{setModalVisible(false); navigation.navigate('Cancel')}}
              style={{backgroundColor: '#F9A830', borderRadius:10, alignItems:'center', justifyContent:'center', flex:.45}}
            >
              <Text style={{color: '#FFF', fontFamily: 'DoHyeon', fontSize:20}}>네</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{setModalVisible(false)}}
              style={{borderColor: '#F9A830', borderWidth:3, borderRadius:10, alignItems:'center',justifyContent:'center', flex:.45}}
            >
              <Text style={{color: '#F9A830', fontFamily: 'DoHyeon', fontSize:20}}>아니요</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.footerBackground}>
        <View style={styles.ellipse}/>
        <View style={styles.rectangle}/>
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  body: {
    width: '80%',
    height: '67%',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    marginBottom: Dimensions.get('window').height / 10,
    borderRadius: 30,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: .25,
    shadowRadius: 4,
  },
  body__title: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body__information: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body__charge: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body__footer: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex:.75,
    marginBottom:15,
  },
  modal: {
    width:'85%',
    height: '20%',
    borderRadius: 30,
    backgroundColor: '#FFF',
    alignSelf:'center',
    justifyContent: "center",
    alignItems: "center",
  },
  modal__button: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex:.4,
  },
  textBox: {
    width: '82%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  textBox__title: {
    width: '85%',
    marginBottom: 20,
  },
  title__text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  textBox__subTitle: {
    fontSize: 16,
    color: '#808080',
  },
  subTitle__text: {
    fontSize: 16,
  },
  footerBackground: {
    width: '100%',
    height: '35%',
    position: 'absolute',
    bottom: 0,
    zIndex: -2,
    alignItems: 'center',
  },
  rectangle: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom:0,
    zIndex: -2,
    backgroundColor: '#005629',
  },
  ellipse: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    zIndex: -2,
    backgroundColor: '#005629',
    borderRadius: Dimensions.get('window').width / 2,
    transform: [
      {scaleX: 2}
    ],
  }
});
