import { View, Text, StatusBar, ImageBackground, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";

import AppHeader from "../../components/AppHeader";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/theme";
import { ScrollView } from "react-native-gesture-handler";

const TicketScreen = ({ navigation, route }: any) => {
  const [ticketData, setTicketData] = useState<any>(route.params);

  useEffect(() => {
    (async () => {
      try {
        const ticket = await SecureStore.getItem("ticket");
        if (ticket !== undefined && ticket !== null) {
          setTicketData(JSON.parse(ticket));
        }
      } catch (error) {
        console.error("Something went wrong while getting Data", error);
      }
    })();
  }, [route]);

  console.log("TICKET DATA", ticketData);

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader name="close" action={() => navigation.goBack()} header={"Vé của bạn"} />
      </View>

      <View style={styles.ticketContainer}>
        <ImageBackground style={styles.ticketBGImage} source={{ uri: ticketData?.ticketImage }}>
          <LinearGradient
            colors={[COLORS.OrangeRGBA0, COLORS.Orange]}
            style={styles.linearGradient}
          >
            <View
              style={[styles.blackCircle, { position: "absolute", bottom: -40, left: -40 }]}
            ></View>
            <View
              style={[styles.blackCircle, { position: "absolute", bottom: -40, right: -40 }]}
            ></View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.linear}></View>
        <View style={styles.ticketFotter}>
          <View style={[styles.blackCircle, { position: "absolute", top: -40, left: -40 }]}></View>
          <View style={[styles.blackCircle, { position: "absolute", top: -40, right: -40 }]}></View>

          <View style={styles.ticketDateContainer}>
            <View style={styles.subtitleContainer}>
              <View style={styles.boxTitle}>
                <Text style={styles.dateTitle}>{ticketData?.date.date}</Text>
              </View>
              <Text style={styles.subtitle}>{ticketData?.date.day}</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <View style={styles.boxTitle}>
                <Ionicons name="time-outline" style={styles.clockIcon} />
              </View>
              <Text style={styles.subtitle}>{ticketData?.time}</Text>
            </View>
          </View>

          <View style={styles.ticketSeatContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Phòng</Text>
              <Text style={styles.subtitle}>02</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Hàng</Text>
              <Text style={styles.subtitle}>04</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subheading}>Ghế</Text>
              <Text style={styles.subtitle}>
                {ticketData?.seatArray.slice(0, 3).map((item: any, index: number, arr: any) => {
                  return item + (index == arr.length - 1 ? "" : ", ");
                })}
              </Text>
            </View>
          </View>
          <Image source={require("../../assets/image/barcode.png")} style={styles.barcodeImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default TicketScreen;
