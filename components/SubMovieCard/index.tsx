import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";

const SubMovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
      <View
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.idFirst
              ? { marginLeft: SPACING.space_36 }
              : props.isLast
              ? { marginRight: SPACING.space_36 }
              : {}
            : {},
          props.shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
          { maxWidth: props.cardWidth },
        ]}
      >
        <Image
          style={[styles.cardImage, { width: props.cardWidth }]}
          source={{ uri: props.imagePath }}
        />
        <Text numberOfLines={1} style={styles.textTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;
