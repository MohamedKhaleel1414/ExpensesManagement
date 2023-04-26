import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import * as Progress from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "rn-multi-progress-bar";

export default function Expenses() {
  return (
    // <SafeAreaView>
      <ScrollView>
        <View style={style.expenses}>
          <View style={style.fristView}>
            <Text style={style.date}>September 2020</Text>
            <Text style={style.amount}>$1812</Text>
          </View>
          <View style={style.secondView}>
            <View style={style.data}>
              <View style={style.details}>
                <Text style={style.head}>Left to Spend</Text>
                <Text style={style.money}>$738</Text>
              </View>
              <View>
                <Text style={style.head}>Monthly Budget</Text>
                <Text style={style.money}>$2550</Text>
              </View>
            </View>
            <View>
                <ProgressBar data={[
                    {progress:0.25, color:"red"},
                    {progress:0.45, color:"cyan"},
                    {progress:0.3, color:"lightgrey"}
                ]} />
            </View>
          </View>
          <View style={style.thirdView}>
            <View style={style.firstofthree}>
              <View style={style.iconView}>
                <View style={style.iconContainer}>
                  <Ionicons name="car" size={28} color={"#6247ea"} />
                </View>
              </View>
              <View style={style.middleTextContainer}>
                <Text style={style.middleText}>Auto & Transport</Text>
              </View>
              <View style={style.endTextContainer}>
                <Text style={style.endText}>$700</Text>
              </View>
            </View>
            <View style={style.secondofthree}>
              <View style={style.firstoftwo}>
                <Text style={style.startText}>Auto & Transport</Text>
                <Text style={style.startText}>$350</Text>
              </View>
              <View style={style.secondoftwo}>
                <View style={style.progressContainer}>
                  <Progress.Bar
                    progress={0.47}
                    width={200}
                    color="#6247ea"
                    borderColor="lightgrey"
                    unfilledColor="lightgrey"
                  />
                </View>
                <Text style={style.evenText}>Left $186</Text>
              </View>
            </View>
            <View style={style.secondofthree}>
              <View style={style.firstoftwo}>
                <Text style={style.startText}>Auto Insurance</Text>
                <Text style={style.startText}>$250</Text>
              </View>
              <View style={style.secondoftwo}>
                <View style={style.progressContainer}>
                  <Progress.Bar
                    progress={0.52}
                    width={200}
                    color="#6247ea"
                    borderColor="lightgrey"
                    unfilledColor="lightgrey"
                  />
                </View>
                <Text style={style.evenText}>Left $120</Text>
              </View>
            </View>
          </View>
          <View style={style.thirdView}>
            <View style={style.firstofthree}>
              <View style={style.iconView}>
                <View style={style.iconContainer}>
                  <Ionicons name="car" size={28} color={"#6247ea"} />
                </View>
              </View>
              <View style={style.middleTextContainer}>
                <Text style={style.middleText}>Bill & Utilities</Text>
              </View>
              <View style={style.endTextContainer}>
                <Text style={style.endText}>$320</Text>
              </View>
            </View>
            <View style={style.secondofthree}>
              <View style={style.firstoftwo}>
                <Text style={style.startText}>Subscribtion</Text>
                <Text style={style.startText}>$52</Text>
              </View>
              <View style={style.secondoftwo}>
                <View style={style.progressContainer}>
                  <Progress.Bar
                    progress={1}
                    width={200}
                    color="#f4603e"
                    borderColor="lightgrey"
                    unfilledColor="lightgrey"
                  />
                </View>
                <Text style={style.evenText}>Left $0</Text>
              </View>
            </View>
            <View style={style.secondofthree}>
              <View style={style.firstoftwo}>
                <Text style={style.startText}>Auto Insurance</Text>
                <Text style={style.startText}>$250</Text>
              </View>
              <View style={style.secondoftwo}>
                <View style={style.progressContainer}>
                  <Progress.Bar
                    progress={0.52}
                    width={200}
                    color="#f4603e"
                    borderColor="lightgrey"
                    unfilledColor="lightgrey"
                  />
                </View>
                <Text style={style.evenText}>Left $120</Text>
              </View>
            </View>
            <View style={style.secondofthree}>
              <View style={style.firstoftwo}>
                <Text style={style.startText}>Maintenance</Text>
                <Text style={style.startText}>$250</Text>
              </View>
              <View style={style.secondoftwo}>
                <View style={style.progressContainer}>
                  <Progress.Bar
                    progress={0.52}
                    width={200}
                    color="#f4603e"
                    borderColor="lightgrey"
                    unfilledColor="lightgrey"
                  />
                </View>
                <Text style={style.evenText}>Left $120</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const style = StyleSheet.create({
  expenses: {
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  fristView: {
    marginTop: 30,
    marginBottom: 40,
  },
  date: {
    fontSize: 17,
  },
  amount: {
    fontSize: 50,
    fontWeight: "bold",
  },
  secondView: {
    width: "100%",
    marginBottom: 40,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head: {
    color: "grey",
    fontSize: 17,
    marginBottom: 5,
  },
  money: {
    fontSize: 17,
    fontWeight: "bold",
  },
  thirdView: {
    width: "100%",
    marginBottom: 40,
  },
  firstofthree: {
    flexDirection: "row",
    marginBottom: 25,
  },
  iconView: {
    width: "20%",
  },
  iconContainer: {
    width: "70%",
    backgroundColor: "lightgrey",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
  },
  middleTextContainer: {
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
  },
  middleText: {
    fontSize: 20,
    fontWeight: "500",
  },
  endTextContainer: {
    width: "20%",
    flexDirection: "column",
    justifyContent: "center",
  },
  endText: {
    fontSize: 20,
    color: "grey",
    textAlign: "right",
  },
  secondofthree: {
    flexDirection: "column",
    gap: 14,
    marginBottom: 30,
  },
  firstoftwo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondoftwo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  startText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  evenText: {
    color: "grey",
    textAlign: "right",
  },
});
