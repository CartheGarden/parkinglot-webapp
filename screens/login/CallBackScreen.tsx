import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import type { AppState } from '../../store'
import { MiddleScreen } from '../general';
import api from '../../utils/api';
import getEnvVars from '../../environment';

const { NAVER_CLIENT_ID, CALL_BACK_URL } = getEnvVars();
declare global {
  interface Window {
    naver: any;
  }
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CallBack'>

export default function CallBackScreen() {
  const navigation = useNavigation<NavigationProp>();
  const parkingSpaceId = useSelector<AppState, string>((state) => state.parkingSpaceId);
  const parkingLockId = useSelector<AppState, string>((state) => state.parkingLockId);

  const { NAVER_CLIENT_ID, CALL_BACK_URL } = getEnvVars();

  useEffect(() => {
    naverLogin.init()
  }, [])

  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: NAVER_CLIENT_ID,
    callbackUrl: CALL_BACK_URL,
    isPopup: false,
    callbackHandle: true
  })

  window.addEventListener('load', function() {
    naverLogin.getLoginStatus(async function(status) {
      if(status) {
        const data = {
          naverId: naverLogin.user.getId(),
          name: naverLogin.user.getName(),
          email: naverLogin.user.getEmail()
        }

        if(data.email == undefined || data.email == null) {
          alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
          naverLogin.reprompt();
          return;
        }
        if(data.name == undefined || data.name == null) {
          alert("이름은 필수정보입니다. 정보제공을 동의해주세요.");
          naverLogin.reprompt();
          return;
        }

        try {
          await api.login(data)
        } catch (err) {
          alert("로그인에 실패하였습니다")
          navigation.navigate('Login')
          return;
        }

        let usageId = 0;
        try {
          const res = await api.useParkingSpace(data.naverId, parkingSpaceId)
          usageId = res.data.id
        } catch (err) {
          alert("이미 사용중인 계정입니다")
          navigation.navigate('ParkingLotInfo')
          return;
        }
        navigation.navigate('ParkingLotUsage', {usageId: usageId});
      } else {
        navigation.navigate('ParkingLotInfo', {parkingLockId: parkingLockId});
      }
    })
  })

  return (
    <MiddleScreen text="로딩중입니다"/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});