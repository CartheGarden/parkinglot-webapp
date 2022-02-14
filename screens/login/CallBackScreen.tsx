import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import { View, Text, StyleSheet } from 'react-native';

declare global {
  interface Window {
    naver: any;
  }
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CallBack'>

export default function CallBackScreen() {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    naverLogin.init()
  }, [])

  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: 'WBKLeGjXXB0UwVFZhu3e',
    callbackUrl: 'http://localhost:19006/callback',
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

        navigation.navigate('ParkingLotInfo', data);
      } else {
        console.log("callback 처리에 실패하였습니다.");
      }
    })
  })

  return (
    <View>
        <Text>Call Back 처리중입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
