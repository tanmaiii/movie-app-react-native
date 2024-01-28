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
  imageBG: {
    width: "100%",
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {
    height: "100%",
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_20,
  },
  screenText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA32,
    textAlign: "center",
  },
  seatContainer: {
    // flexDirection: "row",
    // marginTop: SPACING.space_36,
    // marginBottom: SPACING.space_10,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: SPACING.space_18,
  },
  seatRow: {
    flexDirection: "row",
    gap: SPACING.space_18,
    justifyContent: "center",
  },
  seatIcon: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
  },
  seatRadioContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: SPACING.space_36,
    marginBottom: SPACING.space_10,
    gap: SPACING.space_36,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space_8,
  },
  radioIcon: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_18,
  },
  radioText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  dateContainer: {
    width: SPACING.space_10 * 7,
    height: SPACING.space_10 * 10,
    borderRadius: SPACING.space_10 * 10,
    backgroundColor: COLORS.Grey,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.White,
    fontWeight: "500",
  },
  dayText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    fontWeight: "400",
  },
  OutterContainer: {
    marginVertical: SPACING.space_24,
  },
  timeContainer: {
    paddingVertical: SPACING.space_10,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA50,
    paddingHorizontal: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
    backgroundColor: COLORS.DarkGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.White,
    fontWeight: "400",
  },
  buttonPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_18,
  },
  priceContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  totalPriceText: {
    color: COLORS.WhiteRGBA32,
    fontSize: FONTSIZE.size_16,
  },
  price: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_30,
  },
  boxButton: {
    backgroundColor: COLORS.Orange,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_16,
    borderRadius: BORDERRADIUS.radius_25,
  },
  buttonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_20,
    fontWeight: "700",
  },
});

export default styles;
