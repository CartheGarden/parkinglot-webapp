import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

export default function LoginScrren() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ParkingLotInfo')}>
      <Text style={styles.title}>Login</Text>
    </TouchableOpacity>
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
});
