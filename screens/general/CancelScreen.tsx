import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import * as Font from 'expo-font';

export default function LoginScrren() {

  Font.loadAsync({
    DoHyeon: require('../../assets/fonts/DoHyeon.ttf')
  })

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logoGreen.png')} resizeMode='contain' style={{width: '100%', height: '100%',position:'absolute'}}/>
      <Text style={styles.text}>취소되었습니다</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'DoHyeon',
    color: '#F9A830',
    marginTop: Dimensions.get('window').height / 4,
  },
});
