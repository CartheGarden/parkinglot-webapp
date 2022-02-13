import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import { View, ImageBackground , Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CenteredText, Footer } from "../../components";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

//TODO: Redux에 로그인한 유저 정보 저장, login 성공하면 Redux에 usage Id 저장
export default function LoginScrren() {
  const navigation = useNavigation<NavigationProp>();

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
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('ParkingLotUsage')}>
          <Image source={require('../../assets/images/loginButtonKakao.png')} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
        </TouchableOpacity>
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
