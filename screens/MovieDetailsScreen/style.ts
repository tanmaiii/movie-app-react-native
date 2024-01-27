import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.Black,
    flex: 1,
  },
  content:{
    marginBottom: 80
  },
  containerGap24: {
    gap: SPACING.space_24,
  },
  scollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_20,
  },
  imageBG: {
    width: "100%",
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {
    height: "100%",
  },
  cardImage: {
    width: "60%",
    aspectRatio: 200 / 300,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SPACING.space_15,
    gap: SPACING.space_4,
  },
  timeIcon: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
  },
  runtimeText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.White,
    fontWeight: "600",
  },
  title: {
    fontSize: FONTSIZE.size_30,
    color: COLORS.White,
    fontWeight: "900",
    textAlign: "center",
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_15,
  },
  genreContainer: {
    flex: 1,
    flexDirection: "row",
    gap: SPACING.space_10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  genreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 2,
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
  },
  genreText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA75,
  },
  tagline: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.White,
    textAlign: "center",
    fontStyle: "italic",
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_15,
  },

  infoContainer: {
    marginHorizontal: SPACING.space_24,
  },

  rateContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
  },

  starIcon: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.Yellow,
  },

  disText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.White,
    fontWeight: "400",
    lineHeight: 26,
  },

  conatainerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  boxBtn: {
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_10,
    backgroundColor: COLORS.Orange,
    borderRadius: BORDERRADIUS.radius_25 * 2,
    gap: SPACING.space_10,
  },
  iconTicket: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
  },
  buttonText: {
    fontSize: FONTSIZE.size_20,
    fontWeight: "500",
    color: COLORS.White,
  },
});

export default styles;
