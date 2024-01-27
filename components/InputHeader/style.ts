import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, SPACING, BORDERRADIUS } from "../../theme/theme";

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_15,
    flexDirection: "row",
    textAlign: "center",
    color: COLORS.White
  },
  textInput: {
    width: "90%",
    color: COLORS.White,
    fontSize: FONTSIZE.size_14,
  },
  boxIcon: {
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {},
});

export default styles;
