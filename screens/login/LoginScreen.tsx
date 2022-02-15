import React, { useEffect } from 'react';;
import { View, ImageBackground , Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CenteredText, Footer } from "../../components";
import getEnvVars from '../../environment';

const { NAVER_CLIENT_ID, CALL_BACK_URL } = getEnvVars();
declare global {
  interface Window {
    naver: any;
  }
}

export default function LoginScreen() {

  useEffect(() => {
    initNaver();
  }, [])

  const initNaver = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: CALL_BACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 30 },
    })
    naverLogin.init()
  }

  const handleNaverLogin = () => {
    const naverLoginButton = document.getElementById("naverIdLogin").firstChild;
    if (naverLoginButton) {
      console.log("button exist")
      naverLoginButton.click();
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/loginBackground.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.backgroundCover}></View>
      <View style={styles.body}>
        {/*
          * TODO: make fontsize responsive
        */}
        <CenteredText text="어따하지" style={{flex: .4}} textStyle={{color: 'white' ,fontSize: 48}}/>
        <CenteredText text="Enjoy your smart parking" style={{flex: .25}} textStyle={{color: 'white', fontSize: 20}}/>
        <TouchableOpacity style={styles.loginButton} onPress={handleNaverLogin}>
          <Image source={require('../../assets/images/loginButtonNaver.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Image source={require('../../assets/images/loginButtonKakao.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
        </TouchableOpacity>
        <div id="naverIdLogin" style={{display:"none"}}/>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  header: {
    width: '100%',
    height: '25%',
  },
  body: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButton: {
    flex: .2,
    justifyContent: 'center',
    width: '80%',
    margin: 5,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '18%',
    position: 'absolute',
    bottom: '0px',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backgroundCover: {
    backgroundColor:'#36433C',
    opacity: 0.5,
    width:'100%',
    height:'100%',
    position:'absolute'
  }
});
