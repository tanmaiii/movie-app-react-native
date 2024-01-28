import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, SPACING, BORDERRADIUS, FONTFAMILY } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: COLORS.Black,
    flexDirection: "row",
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_20,
  },
  iconSwapper: {
    paddingRight: SPACING.space_20,
  },
  icon: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.White,
  },
  textSwapper: {
    flex: 1,
    gap: SPACING.space_4,
  },
  title: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
  },
  subtitle: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA15,
  },
  iconArrowSwapper: {
    justifyContent: "center",
  },
  arrowIcon: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.White,
  },
});

export default styles;
