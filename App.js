import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Overview from './screens/Overview';
import Offers from './screens/Offers';
import Settings from './screens/Settings';
import ThisMonth from './screens/ThisMonth';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Overview' component={Overview} 
        options={{
          tabBarIcon: (focus)=>{
            return(
              <Ionicons name='star' size={24} color={focus.focused ? "#6247ea" : "#8e8e93"}/>
            )
          },
          tabBarLabel: (focus)=>{
            return(
              <Text style={{color: focus.focused ? "#6247ea" : "#8e8e93"}}>Overview</Text>
            )
          }
        }}/>
        <Tab.Screen name='This Month' component={ThisMonth} 
        options={{
          tabBarIcon: (focus)=>{
            return(
              <Ionicons name='star' size={24} color={focus.focused ? "#6247ea" : "#8e8e93"}/>
            )
          },
          tabBarLabel: (focus)=>{
            return(
              <Text style={{color: focus.focused ? "#6247ea" : "#8e8e93"}}>This Month</Text>
            )
          }
        }}/>
        <Tab.Screen name='Offers' component={Offers} 
        options={{
          tabBarIcon: (focus)=>{
            return(
              <Ionicons name='star' size={24} color={focus.focused ? "#6247ea" : "#8e8e93"}/>
            )
          },
          tabBarLabel: (focus)=>{
            return(
              <Text style={{color: focus.focused ? "#6247ea" : "#8e8e93"}}>Offers</Text>
            )
          }
        }}/>
        <Tab.Screen name='Settings' component={Settings} 
        options={{
          tabBarIcon: (focus)=>{
            return(
              <Ionicons name='star' size={24} color={focus.focused ? "#6247ea" : "#8e8e93"}/>
            )
          },
          tabBarLabel: (focus)=>{
            return(
              <Text style={{color: focus.focused ? "#6247ea" : "#8e8e93"}}>Settings</Text>
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
