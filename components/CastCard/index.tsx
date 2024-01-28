import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
import { SPACING } from "../../theme/theme";

const img = require("../../assets/image/barcode.png");

const index = (props: any) => {
  return (
    <View
      style={[
        styles.container,
        props.shouldMarginatedAtEnd
          ? props.isFirst
            ? { marginLeft: SPACING.space_24 }
            : props.isLast
            ? { marginRight: SPACING.space_24 }
            : {}
          : {},
        { maxWidth: props.cardWidth },
      ]}
    >
      {props?.imagePath ? (
        <Image
          source={{ uri: props?.imagePath }}
          style={[styles.cardImage, { width: props.cardWidth }]}
        />
      ) : (
        <Image
          source={require("../../assets/image/avatar.jpg")}
          style={[styles.cardImage, { width: props.cardWidth }]}
        />
      )}
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {props.subtitle}
      </Text>
    </View>
  );
};

export default index;
