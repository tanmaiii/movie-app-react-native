import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.Black,
  },
  scollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_36,
  }
});

export default styles;
