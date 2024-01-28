import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    overflow: "hidden",
  },
  cardImage: {
    aspectRatio: 1920 / 2880,
    borderRadius: BORDERRADIUS.radius_25 * 4,
    objectFit: 'cover',
    width: '100%',
    height: 'auto'
  },
  title: {
    alignSelf: "stretch",
    fontSize: FONTSIZE.size_12,
    color: COLORS.White,
    textAlign: "center",
  },
  subtitle: {
    alignSelf: "stretch",
    fontSize: FONTSIZE.size_10,
    color: COLORS.White,
  },
});

export default styles;
