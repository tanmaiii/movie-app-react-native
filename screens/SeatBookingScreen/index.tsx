import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { baseImagePath } from "../../api/apicalls";
import { COLORS, SPACING } from "../../theme/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EncryptedStorage from "react-native-encrypted-storage";

import * as SecureStore from "expo-secure-store";

import AppHeader from "../../components/AppHeader";

const timeArray: string[] = ["10:30", "12:30", "14:30", "15:00", "19:30", "21:00"];

const generateDate = () => {
  const date = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekdays = [];
  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};

const generateSeats = () => {
  let numRow = 8;
  let numColumn = 3;
  let rowArray = [];
  let start = 1;
  let reachnine = false;

  for (let i = 0; i < numRow; i++) {
    let columnArray = [];
    for (let j = 0; j < numColumn; j++) {
      let seatObject = {
        number: start,
        taken: Boolean(Math.round(Math.random())),
        selected: false,
      };
      columnArray.push(seatObject);
      start++;
    }
    if (i == 3) {
      numColumn += 2;
    }
    if (numColumn < 9 && !reachnine) {
      numColumn += 2;
    } else {
      reachnine = true;
      numColumn -= 2;
    }
    rowArray.push(columnArray);
  }
  return rowArray;
};

const SeatBookingScreen = ({ navigation, route }: any) => {
  const [dateArray, setDateArray] = useState<any[]>(generateDate());
  const [price, setPrice] = useState<number>(0);
  const [twoDSeatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
  const [selectedSeatArray, setSelectedSeatArray] = useState([]);

  const [selectedDateIndex, setSelectedDateIndex] = useState<any>(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>(0);

  console.log(dateArray);

  const selectSeat = (index: number, subindex: number, num: number) => {
    if (!twoDSeatArray[index][subindex].taken) {
      let array: any = [...selectedSeatArray];
      let temp = [...twoDSeatArray];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(num)) {
        array.push(num);
        setSelectedSeatArray(array);
      } else {
        const tempindex = array.indexOf(num);
        if (tempindex > -1) {
          array.splice(tempindex, 1);
          setSelectedSeatArray(array);
        }
      }
      setPrice(array.length * 60);
      setTwoDSeatArray(temp);
    }
  };

  const BookSeats = async () => {
    if (
      selectedSeatArray.length !== 0 &&
      dateArray[selectedDateIndex] !== undefined &&
      timeArray[selectedTimeIndex] !== undefined
    ) {
      try {
        await SecureStore.setItem(
          "ticket",
          JSON.stringify({
            seatArray: selectedSeatArray,
            time: timeArray[selectedTimeIndex],
            date: dateArray[selectedDateIndex],
            ticketImage: route.params.PosterImage,
          })
        );

        // await EncryptedStorage.setItem(
        //   "ticket",
        //   JSON.stringify({
        //     seatArray: selectedSeatArray,
        //     time: timeArray[selectedTimeIndex],
        //     date: dateArray[selectedDateIndex],
        //     ticketImage: route.params.PosterImage,
        //   })
        // );
      } catch (error) {
        console.error("Something went Wrong while storing in BookSeats Functions", error);
      }
      navigation.navigate("Ticket", {
        seatArray: selectedSeatArray,
        time: timeArray[selectedTimeIndex],
        date: dateArray[selectedDateIndex],
        ticketImage: route.params.PosterImage,
      });
    } else {
      ToastAndroid.showWithGravity(
        "Hãy chọn vị trí, ngày, thời gian trước khi đặt vé.",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View>
        <ImageBackground source={{ uri: route.params?.BgImage }} style={styles.imageBG}>
          <LinearGradient colors={[COLORS.BlackRGB10, COLORS.Black]} style={styles.linearGradient}>
            <View style={styles.appHeaderContainer}>
              <AppHeader name="close" action={() => navigation.goBack()} />
            </View>
          </LinearGradient>
        </ImageBackground>
        <Text style={styles.screenText}>Màn hình</Text>
      </View>
      {/* ghế */}
      <View style={styles.seatContainer}>
        <View style={styles.conatinerGap18}>
          {twoDSeatArray?.map((item, index) => {
            return (
              <View key={index} style={styles.seatRow}>
                {item?.map((subitem, subindex) => {
                  return (
                    <TouchableOpacity
                      key={subitem.number}
                      onPress={() => {
                        selectSeat(index, subindex, subitem.number);
                      }}
                    >
                      <FontAwesome
                        name="square"
                        style={[
                          styles.seatIcon,
                          subitem.taken ? { color: COLORS.Grey } : {},
                          subitem.selected ? { color: COLORS.Orange } : {},
                        ]}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>

        <View style={styles.seatRadioContainer}>
          <View style={styles.radioContainer}>
            <FontAwesome name="square" style={[styles.radioIcon]} />
            <Text style={styles.radioText}>Ghế trống </Text>
          </View>
          <View style={styles.radioContainer}>
            <FontAwesome name="square" style={[styles.radioIcon, { color: COLORS.Grey }]} />
            <Text style={styles.radioText}>Đã đặt</Text>
          </View>
          <View style={styles.radioContainer}>
            <FontAwesome name="square" style={[styles.radioIcon, { color: COLORS.Orange }]} />
            <Text style={styles.radioText}>Đang chọn</Text>
          </View>
        </View>
      </View>

      {/* ngày */}
      <View>
        <FlatList
          data={dateArray}
          keyExtractor={(item) => item.date}
          horizontal
          bounces={false}
          contentContainerStyle={styles.conatinerGap24}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => setSelectedDateIndex(index)}>
                <View
                  style={[
                    styles.dateContainer,
                    index == 0
                      ? { marginLeft: SPACING.space_24 }
                      : index == dateArray.length - 1
                      ? { marginRight: SPACING.space_24 }
                      : {},
                    index == selectedDateIndex ? { backgroundColor: COLORS.Orange } : {},
                  ]}
                >
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Text style={styles.dayText}>{item.day}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* giờ */}
      <View style={styles.OutterContainer}>
        <FlatList
          data={timeArray}
          keyExtractor={(item) => item}
          horizontal
          bounces={false}
          contentContainerStyle={styles.conatinerGap24}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => setSelectedTimeIndex(index)}>
                <View
                  style={[
                    styles.timeContainer,
                    index == 0
                      ? { marginLeft: SPACING.space_24 }
                      : index == dateArray.length - 1
                      ? { marginRight: SPACING.space_24 }
                      : {},
                    index == selectedTimeIndex
                      ? { backgroundColor: COLORS.Orange, borderColor: COLORS.Orange }
                      : {},
                  ]}
                >
                  <Text style={styles.timeText}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Tiền */}
      <View style={styles.buttonPriceContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Tổng tiền</Text>
          <Text style={styles.price}>{price} VND</Text>
        </View>
        <TouchableOpacity onPress={BookSeats}>
          <Text style={styles.buttonText}>Đặt ngay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SeatBookingScreen;
