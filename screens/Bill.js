import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import apple from "../assets/apple.jpeg";
import spotify from "../assets/spotify.png";
import netflex from "../assets/netflex.png";
import patreon from "../assets/patreon.png";

export default function Bill() {
  return (
    // <SafeAreaView>
      <ScrollView>
        <View style={style.bill}>
          <View style={style.firstView}>
            <Text style={style.firstOne}>
              Your monthly payment for subscribtions
            </Text>
            <Text style={style.secondOne}>$61.88</Text>
          </View>
          <View style={style.secondView}>
            <View style={style.membership}>
              <View style={style.imageContainer}>
                <Image source={patreon} style={style.image} />
              </View>
              <View style={style.middle}>
                <Text style={style.middleOne}>Patreon membership</Text>
                <Text style={style.middleTwo}>$19.99/mo</Text>
              </View>
              <View style={style.buttomContainer}>
                <Pressable>
                  <Ionicons
                    name="arrow-forward"
                    size={28}
                    color={"lightgrey"}
                    style={style.icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={style.membership}>
              <View style={style.imageContainer}>
                <Image source={netflex} style={style.image} />
              </View>
              <View style={style.middle}>
                <Text style={style.middleOne}>Netflex</Text>
                <Text style={style.middleTwo}>$12/mo</Text>
              </View>
              <View style={style.buttomContainer}>
                <Pressable>
                  <Ionicons
                    name="arrow-forward"
                    size={28}
                    color={"lightgrey"}
                    style={style.icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={style.membership}>
              <View style={style.imageContainer}>
                <Image source={apple} style={style.image} />
              </View>
              <View style={style.middle}>
                <Text style={style.middleOne}>Apple payment</Text>
                <Text style={style.middleTwo}>$19.99/mo</Text>
              </View>
              <View style={style.buttomContainer}>
                <Pressable>
                  <Ionicons
                    name="arrow-forward"
                    size={28}
                    color={"lightgrey"}
                    style={style.icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={style.membership}>
              <View style={style.imageContainer}>
                <Image source={spotify} style={style.image} />
              </View>
              <View style={style.middle}>
                <Text style={style.middleOne}>Spotify</Text>
                <Text style={style.middleTwo}>$6.99/mo</Text>
              </View>
              <View style={style.buttomContainer}>
                <Pressable>
                  <Ionicons
                    name="arrow-forward"
                    size={28}
                    color={"lightgrey"}
                    style={style.icon}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bill: {
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  firstView: {
    alignItems: "center",
    width: "50%",
    marginTop: 30,
    marginBottom: 40,
  },
  firstOne: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  secondOne: {
    fontSize: 50,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  membership: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical:30
  },
  secondView: {
    width: "100%",
    borderRadius:14,
    borderColor:"lightgrey",
    borderWidth:1,
    padding:14
  },
  imageContainer: {
    width: "15%",
    height:"100%"
  },
  middleOne: {
    fontSize: 20,
  },
  middleTwo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    textAlign: "center",
  },
  middle: {
    width: "65%",
  },
  buttomContainer: {
    width: "15%",
  },
});
