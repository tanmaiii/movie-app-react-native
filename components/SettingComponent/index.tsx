import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./style";

export default function index(props: any) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconSwapper}>
          <Ionicons style={styles.icon} name={props.icon} />
        </View>
        <View style={styles.textSwapper}>
          <Text style={styles.title}>{props.header}</Text>
          <Text style={styles.subtitle}>{props.subheading}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>

        <View style={styles.iconArrowSwapper}>
          <Ionicons style={styles.arrowIcon} name={"chevron-forward-outline"} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
