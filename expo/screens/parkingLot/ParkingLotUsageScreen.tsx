import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import { CenteredText } from "../../components";
import { InfoCardScreen } from '.';
import api from '../../utils/api';

export default function ParkingLotUsageScreen({route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usageData, setUsageData] = useState({});
  const [usageDataObject, setUsageDataObject] = useState({});
  const [parkingSpace, setParkingSpace] = useState({});
  const [parkingLot, setparkingLot] = useState({});
  const [member, setMember] = useState({});

  //TODO: url params 가져오기

  async function getUsage () {
    try {
      const res = await api.getUsage(route.params.usageId);
      setUsageData(res.data)
      setUsageDataObject(res?.data.usage)
      setParkingSpace(res?.data.usage.parkingSpace)
      setparkingLot(res?.data.usage.parkingSpace.parkingLot)
      setMember(res?.data.usage.member)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    setLoading(true);
    getUsage()
    setLoading(false);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{member.name+"님의 이용정보"}</Text>
        <Modal
          visible={modalVisible}
          animationType='none'
          transparent={true}
          onRequestClose={()=>setModalVisible(!modalVisible)}
        >
          <View style={styles.modalContainer}>
            <InfoCardScreen
              isModal={true}
              onPressClose={()=>setModalVisible(!modalVisible)}
              data={parkingLot}
            />
          </View>
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
            <Text style={styles.subviewContentText}>{parkingSpace.section}</Text>
          </View>
          <CenteredText text="주차구역" style={styles.subviewTitle} textStyle={{color: Colors.white, fontSize: 20}}/>
        </View>
        <View style={[styles.subview, {flex: 1}]}>
          <View style={[styles.subviewContent, {height: 130}]}>
            <Text style={styles.subviewContentText}>{parseInt(usageData.usageMinute / 60) + "시간 "+ usageData.usageMinute % 60 +"분"}</Text>
            <Text style={[styles.subviewContentText, {fontSize: 18}]}>{"입차: "+new Date(usageDataObject.entranceTime).toLocaleString()}</Text>
          </View>
          <CenteredText text="이용시간" style={styles.subviewTitle} textStyle={{color: Colors.white, fontSize: 20}}/>
        </View>
        <View style={styles.chargeInfo}>
          <Text style={[styles.textStyle, {backgroundColor: 'rgba( 249, 168, 48, 0.8 )'}]}>결제금액</Text>
          <Text style={styles.textStyle}>{usageData.charge+"원"}</Text>
        </View>
        <View style={styles.chargeMsg}>
          <Text style={{color: Colors.white}}>#출차 후 결제 안내 메일이 전송됩니다</Text>
          <Text style={{color: Colors.white}}>{member.email}</Text>
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
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
  }
});
