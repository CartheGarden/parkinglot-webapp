import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Footer({source=require('../assets/images/logoWhite.png')}) {
  return (
    <View style={styles.footer}>
      <Image source={source} resizeMode='contain' style={{width: '100%', height: '100%', }} />
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '18%',
    position: 'absolute',
    bottom: '0px',
  },
})