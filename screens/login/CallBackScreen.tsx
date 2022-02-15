import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import type { AppState } from '../../store'
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
    naverLogin.getLoginStatus(function(status) {
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

        // navigation.navigate('ParkingLotUsage', id);
        // TODO: Call postMember(data) with data: {naverid, name, email}
        //       and Call postUsage(data) data: { naverId, parkingSpaceId } -> get usage id -> pass through navigation
        console.log(data.naverId)
        console.log(data.name)
        console.log(data.email)
        navigation.navigate('ParkingLotUsage');
      } else {
        console.log("callback 처리에 실패하였습니다.");
      }
    })
  })

  return (
    <View style={styles.container}>
        <Text>Call Back 처리중입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});