import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const genres: any = {
  28: "Hành động",
  12: "Phiêu lưu",
  16: "Hoạt hình",
  35: "Hài kịch",
  80: "Hình sự",
  99: "Chân dung",
  18: "Kịch",
  10751: "Gia đình",
  14: "Phép thuật",
  36: "Lịch sử",
  27: "Kinh dị",
  10402: "Âm nhạc",
  9648: "Bí ẩn",
  10749: "Lãng mạn",
  878: "Khoa học viễn tưởng",
  10770: "Phim truyền hình",
  53: "Kinh điển",
  10752: "Chiến tranh",
  37: "Miền Tây",
};

const MovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
      <View
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.isFirst
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

        <View>
          <View style={styles.rateContainer}>
            <FontAwesome name="star" style={styles.starIcon} />
            <Text style={styles.voteText}>
              {props.vote_average.toFixed(1)} ({props.vote_count})
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.textTitle}>
            {props.title}
          </Text>

          <View style={styles.genreContainer}>
            {props.genre.map((item: any) => {
              return (
                <View key={item} style={styles.genreBox}>
                  <Text style={styles.genreText}>{genres[item]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
