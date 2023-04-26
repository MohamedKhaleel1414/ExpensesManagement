import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Progress from 'react-native-progress';
import Svg from 'react-native-svg'

export default function CreditScore() {
  return (
    <ScrollView>
      <View style={style.credit}>
        <View style={style.firstView}>
            <View style={style.progressView}>
                <Svg height="50%" width="50%" viewBox="0 0 100 100">
                    <Progress.Circle size={300} indeterminate={false} progress={0.29} unfilledColor="lightgrey" color="#6247ea" thickness={7} borderColor="white" style={{transform:[{rotate:'-90deg'}],padding:20}} />
                </Svg>
                <View style={style.progressText}>
                    <Text style={{color:"grey"}}>Good</Text>
                    <Text style={{fontSize:50,fontWeight:"bold"}}>660</Text>
                    <Text style={{color:"#6247ea"}}>+6pts</Text>
                </View>
            </View> 
            <View style={style.opacitiedText}>
                <Text style={style.opacitied}>400</Text>
                <Text style={style.opacitied}>Last update on 20 Jul 2020</Text>
                <Text style={style.opacitied}>850</Text>
            </View>
        </View>
        <View style={style.secondView}>
            <View style={style.firstofthree}>
                <View style={style.firstoftwo}>
                    <Text style={style.boldtext}>On-time payments</Text>
                    <Text style={style.boldtext}>95%</Text>
                </View>
                <View style={style.firstoftwo}>
                    <Text style={style.status}>Good</Text>
                    <Text style={style.missed}>1 missed</Text>
                </View>
            </View>
            <View style={style.firstofthree}>
                <View style={style.firstoftwo}>
                    <Text style={style.boldtext}>Credit Utilization</Text>
                    <Text style={style.boldtext}>95%</Text>
                </View>
                <View style={style.firstoftwo}>
                    <Text style={style.statusone}>Not bad</Text>
                    <Text style={style.missed}>-15%</Text>
                </View>
            </View>
            <View style={style.firstofthree}>
                <View style={style.firstoftwo}>
                    <Text style={style.boldtext}>Age of credit</Text>
                    <Text style={style.boldtext}>8 years</Text>
                </View>
                <View style={style.firstoftwo}>
                    <Text style={style.status}>Good</Text>
                    <Text style={style.missed}></Text>
                </View>
            </View>
        </View>
      </View> 
    </ScrollView> 
  );
}

const style = StyleSheet.create({
  credit: {
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  secondView:{
    width: "100%",
    borderRadius:14,
    borderColor:"lightgrey",
    borderWidth:1,
    padding:14,
  },
  firstoftwo:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  boldtext:{
    fontSize:20,
    fontWeight:"bold"
  },
  status:{
    fontSize:17,
    color:"green"
  },
  missed:{
    fontSize:17,
    color:"grey"
  },
  firstofthree:{
    flexDirection: "column",
    gap: 10,
    paddingVertical:20
  },
  statusone:{
    fontSize:17,
    color:"orange"
  },
  firstView:{
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    paddingHorizontal:14,
    overflow:"hidden"
  },
  opacitiedText:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  opacitied:{
    color:"grey"
  },
  progressView:{
    overflow:"hidden",
    marginBottom:10,
  },
  progressText:{
    position:"absolute",
    top:"45%",
    left:"35%",
    alignItems:"center",
    width:"40%"
  }
});
