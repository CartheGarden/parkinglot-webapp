import React from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";

export default function CenteredText({text, textStyle, style}){
  Font.loadAsync({
    DoHyeon: require('../assets/fonts/DoHyeon.ttf'),
  })
  return (
    <View style={[style, {justifyContent: 'center'}]}>
      <Text style={[textStyle, {fontFamily: 'DoHyeon'}]}>{text}</Text>
    </View>
  )
}