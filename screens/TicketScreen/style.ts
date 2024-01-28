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
  ticketContainer: {
    flex: 1,
    justifyContent: "center",
  },
  ticketBGImage: {
    alignSelf: "center",
    width: 300,
    aspectRatio: 200 / 300,
    borderTopLeftRadius: BORDERRADIUS.radius_25,
    borderTopRightRadius: BORDERRADIUS.radius_25,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  linearGradient: {
    height: "70%",
  },
  linear: {
    borderTopColor: COLORS.Black,
    width: 300,
    alignSelf: "center",
    borderTopWidth: 3,
    borderStyle: "dashed",
    backgroundColor: COLORS.Orange,
  },
  blackCircle: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: COLORS.Black,
  },
  ticketFotter: {
    backgroundColor: COLORS.Orange,
    width: 300,
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: SPACING.space_36,
    borderBottomLeftRadius: BORDERRADIUS.radius_25,
    borderBottomRightRadius: BORDERRADIUS.radius_25,
  },
  ticketDateContainer: {
    flexDirection: "row",
    gap: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SPACING.space_10,
  },
  subtitleContainer: {
    alignItems: "center",
  },
  boxTitle: {
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  dateTitle: {
    fontSize: FONTSIZE.size_24,
    fontWeight: "600",
    color: COLORS.White,
  },
  subtitle: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  clockIcon: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    // paddingBottom: SPACING.space_10,
  },
  subheading: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "600",
    color: COLORS.White,
  },
  ticketSeatContainer: {
    flexDirection: "row",
    gap: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SPACING.space_10,
  },
  barcodeImage: {
    height: 50,
    aspectRatio: 158 / 52,
  },
});

export default styles;
