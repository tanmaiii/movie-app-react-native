import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const CategoryHeader = (props: any) => {
  return <Text style={styles.text}>{props.title}</Text>
};

const styles = StyleSheet.create({
  text: {
      fontSize: FONTSIZE.size_20,
      fontWeight: '900',
      color: COLORS.White,
      paddingHorizontal: SPACING.space_36,
      paddingVertical: SPACING.space_16
  }
})

export default CategoryHeader;
