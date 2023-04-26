import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Expenses from "./Expenses";
import Bill from "./Bill";
import CreditScore from "./CreditScore";

const Tab = createMaterialTopTabNavigator()

export default function ThisMonth(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Expenses" component={Expenses}/>
            <Tab.Screen name="Bill" component={Bill} />
            <Tab.Screen name="Credit Score" component={CreditScore} />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({

})