import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.Black,
    flex : 1,
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_16,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
  ContainerNotFound: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
  TextNotFound:{
    fontSize: FONTSIZE.size_16,
    color: COLORS.White
  }
});

export default styles;
