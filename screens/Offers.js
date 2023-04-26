import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Offers(){
    return(
        <View style={style.container}>
            <Text>This is Offers Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})