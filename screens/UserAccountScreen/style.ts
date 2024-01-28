import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.Black,
    flex: 1,
  },
  conatinerGap18: {
    gap: SPACING.space_18,
  },
  conatinerGap24: {
    gap: SPACING.space_24,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_20,
  },
  avatarContainer: {
    alignItems: "center",
    padding: SPACING.space_36,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  avatarText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_20,
    fontWeight: "600",
    marginTop: SPACING.space_16,
  },
});

export default styles;
