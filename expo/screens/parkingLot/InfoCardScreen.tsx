import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CenteredText } from '../../components';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ParkingLotInfo'>

//TODO: Redux에 저장된 ParkingLot 정보로 가져오기
export default function InfoCardScreen({isModal, onPressClose, data}) {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);

  const Info = ({title, content}) => (
    <View style={styles.info}>
      <Text style={{color: Colors.gray}}>{title}</Text>
      <Text style={{color: Colors.black}}>{content}</Text>
    </View>
  )

  const dateFormatter = (date) => {
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
  }

  return (
    <View style={styles.card}>
      {isModal &&
        <TouchableOpacity
        style={styles.closeButton}
        onPress={onPressClose}
        >
          <Icon name="close-circle" color={Colors.secondary} size={25}/>
        </TouchableOpacity>
      }
      <CenteredText text={data.name} style={{flex: .2}} textStyle={{color: Colors.primary ,fontSize: 30, marginTop: 20}}/>
      <View style={styles.body}>
        <View style={styles.subview}>
          <Text style={styles.subviewTitle}>주차장 정보</Text>
          <Info title="운영시간" content={data.weekdayStartTime+" ~ "+data.weekdayEndTime}/>
          <Info title="위치" content={data.address}/>
          <Info title="관리자 번호" content={data.adminPhone}/>
        </View>
        <View style={styles.divider}/>
        <View style={styles.subview}>
          <Text style={styles.subviewTitle}>요금 안내</Text>
          <Info title="기본 요금" content={data.basicCharge+"원 / "+data.basicTimeUnitMinute+"분"}/>
          <Info title="추가 요금" content={data.additionalCharge+"원 / "+data.additionalTimeUnitMinute+"분"}/>
          <Info title="할증 요금" content="-"/>
        </View>
      </View>
      <View style={styles.updateText}>
        <Text style={{color: Colors.gray}}>{"업데이트: " + dateFormatter(new Date(data.lastUpdate))}</Text>
      </View>
      {!isModal &&
        <View style={styles.button}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('Login')}}
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
      }
      <View style={{flex: .07}}></View>
      <Modal
        visible={modalVisible}
        animationType='none'
        transparent={true}
        onRequestClose={()=>setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
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
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    alignItems: 'center',
    width: '85%',
    height: '70%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: .25,
    shadowRadius: 4,
  },
  body: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    height: 1.5,
    backgroundColor: Colors.gray,
  },
  subview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  subviewTitle: {
    color: Colors.gray,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 7,
    fontSize: 16,
  },
  closeButton: {
    width: '95%',
    alignItems: 'flex-end',
    marginTop: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 7,
  },
  updateText: {
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex:.1,
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
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
  }
});
