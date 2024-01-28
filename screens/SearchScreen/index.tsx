import { View, Text, StatusBar, FlatList, Dimensions, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import InputHeader from "../../components/InputHeader";
import { baseImagePath, popularMovies, searchMovies } from "../../api/apicalls";
import SubMovieCard from "../../components/SubMovieCard";
import { SPACING } from "../../theme/theme";

const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }: any) => {
  const [searchList, setSearchList] = useState<any>([]);
  const [keyword, setKeyword] = useState<string>("");

  const searchMovieFunction = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    let response = null;
    const getList = async () => {
      if (keyword.length === 0) {
        response = await fetch(popularMovies);
        let json = await response.json();
        setSearchList(json.results);
      } else {
        response = await fetch(searchMovies(keyword));
        let json = await response.json();
        setSearchList(json.results);
      }
    };
    getList();
  }, [keyword]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader
          searchFunction={searchMovieFunction}
          keyword={keyword}
          setKeyword={setKeyword}
        />
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
