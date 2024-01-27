import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const timeArray: string[] = [
  '10:30',
  '12:30',
  '14:30',
  '15:00',
  '19:30',
  '21:00',
];

const generateDate = () => {
  const date = new Date();
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let weekdays = []
  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
}

const generateSeat = () => {
  let numRow = 8
  let numColumn = 3
  let rowArray = []

  return
}

const SeatBookingScreen = ({ navigation }: any) => {
  const [dateArray, setDateArray] = useState<string[]>(generateDate())
  const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
  const [price, setPrice] = useState<number>(0)
  const [twoDSeatArray, setTowDSeatArray] = useState<[][]>(generateSeat());
  const [selectedSeatArray, setSelectedSeatArray] = useState<any>();
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>();

  return (
    <View>
      <Text>SeatBookingScreen</Text>
    </View>
  );
};

export default SeatBookingScreen;
