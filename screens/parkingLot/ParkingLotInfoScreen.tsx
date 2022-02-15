import React, { useState, useEffect } from 'react';
import { Dimensions ,StyleSheet, View } from 'react-native';
import { Footer } from '../../components';
import * as Font from "expo-font";
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, saveParkingLockIdAction, saveParkingSpaceIdAction } from '../../store'
import { InfoCardScreen } from '.';


export default function ParkingLotInfoScreen({route}) {
  const dispatch = useDispatch();
  const parkingLockIdRedux = useSelector<AppState, string>((state) => state.parkingLockId);
  const [loading, setLoading] = useState(false);
  const [parkingLotData, setParkingLotData] = useState([]);
  const [parkingLockId, setParkingLockId] = useState("");

  Font.loadAsync({
    DoHyeon: require('../../assets/fonts/DoHyeon.ttf')
  })

  async function init() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const lockId = route.params?.parkingLockId ? route.params.parkingLockId : 
                                            id ? id : parkingLockIdRedux;
    dispatch(saveParkingLockIdAction(lockId));
    try {
      const res = await api.getParkingSpace(lockId);
      setParkingLotData(res.data.parkingLot)
      dispatch(saveParkingSpaceIdAction(res?.data.id));
    } catch (err) {
      console.log(err);
    }
  }

  async function getParkingLot () {
    try {
      const res = await api.getParkingSpace(parkingLockId);
      setParkingLotData(res.data.parkingLot)
      dispatch(saveParkingSpaceIdAction(res?.data.id));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    setLoading(true);
    init();
    setLoading(false);
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <InfoCardScreen
          isModal={false}
          data={parkingLotData}
        />
      </View>
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
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '95%'
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
