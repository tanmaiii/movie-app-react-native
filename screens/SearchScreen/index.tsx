import { View, Text, StatusBar, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import InputHeader from "../../components/InputHeader";
import { baseImagePath, searchMovies } from "../../api/apicalls";
import SubMovieCard from "../../components/SubMovieCard";
import { SPACING } from "../../theme/theme";

const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }: any) => {
  const [searchList, setSearchList] = useState<any>([]);

  const searchMovieFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error("Lỗi searchMovieFunction", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMovieFunction} />
      </View>
      <View>
        {searchList.length === 0 ? (
          <View style={styles.ContainerNotFound}>
            <Text style={styles.TextNotFound}>Không tìm thấy</Text>
          </View>
        ) : (
          <FlatList
            data={searchList}
            keyExtractor={(item: any) => item.id}
            bounces={false}
            numColumns={2}
            contentContainerStyle={styles.containerGap36}
            renderItem={({ item, index }) => (
              <SubMovieCard
                shoudlMarginatedAtEnd={true}
                shouldMarginatedAround={true}
                cardFunction={() => {
                  navigation.navigate("MovieDetails", { movieid: item.id });
                }}
                cardWidth={width / 2 - SPACING.space_12 * 2}
                title={item?.title}
                imagePath={baseImagePath("w342", item?.poster_path)}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
