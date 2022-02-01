import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CenteredText } from '../../components';
import Colors from '../../constants/Colors';

export default function InfoModalScreen({onPressClose}) {

  const Info = ({title, content}) => (
    <View style={styles.info}>
      <Text style={{color: Colors.gray}}>{title}</Text>
      <Text style={{color: Colors.black}}>{content}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onPressClose}
        >
          <Icon name="close-circle" color={Colors.secondary} size={25}/>
        </TouchableOpacity>
        <CenteredText text="율전 공용주차장" style={{flex: .2}} textStyle={{color: Colors.primary ,fontSize: 30}}/>
        <View style={styles.body}>
          <View style={styles.subview}>
            <Text style={styles.subviewTitle}>주차장 정보</Text>
            <Info title="운영시간" content="09:00~17:00"/>
            <Info title="위치" content="경기 수원시 장안구 화산로213번길"/>
            <Info title="관리자 번호" content="010-3890-6081"/>
          </View>
          <View style={styles.divider}/>
          <View style={styles.subview}>
            <Text style={styles.subviewTitle}>요금 안내</Text>
            <Info title="기본 요금" content="1시간/2000원"/>
            <Info title="추가 요금" content="10분/250원"/>
            <Info title="할증 요금" content="-"/>
          </View>
        </View>
        <View style={styles.updateText}>
          <Text style={{color: Colors.gray}}>업데이트: 2022-01-19</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
  },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems: 'center',
    width: '85%',
    height: '70%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
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
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
