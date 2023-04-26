import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Overview(){
    return(
        <View style={style.container}> 
            <Text>This is Overview Screen</Text>
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