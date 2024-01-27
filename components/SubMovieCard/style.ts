import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, SPACING, BORDERRADIUS, FONTFAMILY } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  cardImage: {
    aspectRatio: 2 / 3,
    borderRadius: BORDERRADIUS.radius_20,
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.White,
    textAlign: "center",
    paddingVertical: SPACING.space_10,
  },
});

export default styles;
