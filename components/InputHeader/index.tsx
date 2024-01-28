import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";
import styles from "./style";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputHeader = (props: any) => {

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={(textInput) => props.setKeyword(textInput)}
        value={props.keyword}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
      ></TextInput>
      <TouchableOpacity style={styles.boxIcon} onPress={() => props.searchFunction()}>
        <Ionicons
          style={styles.icon}
          name="search-outline"
          size={FONTSIZE.size_24}
          color={COLORS.Orange}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
