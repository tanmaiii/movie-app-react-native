import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";
import styles from "./style";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = React.useState<string>("");

  const handlePress = () => {
    props.searchFunction(searchText)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={(textInput) => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
      ></TextInput>
      <TouchableOpacity style={styles.boxIcon} onPress={handlePress}>
        <Ionicons style={styles.icon} name="search-outline" size={FONTSIZE.size_24} color={COLORS.Orange} />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
