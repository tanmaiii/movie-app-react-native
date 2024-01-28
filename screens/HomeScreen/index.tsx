import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { baseImagePath, nowPlayingMovies, popularMovies, upcomingMovies } from "../../api/apicalls";
import React from "react";
import styles from "./style";

import InputHeader from "../../components/InputHeader";
import CategoryHeader from "../../components/CategoryHeader";
import SubmovieCard from "../../components/SubMovieCard";
import MovieCard from "../../components/MovieCard";
import { SPACING } from "../../theme/theme";

//Chiều cao, rộng của màn hình
const { width, height } = Dimensions.get("window");

// lấy các phim đang chiếu
const getNowPlayingMoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("Lỗi getNowPlayingMoviesList", error);
  }
};

// lấy các phim mới
const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("Lỗi getUpcomingMoviesList", error);
  }
};

// lấy các phim mới
const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("Lỗi getPopularMoviesList", error);
  }
};

const HomeScreen = ({ navigation }: any) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    (async () => {
      let tmpNowPlayping = await getNowPlayingMoviesList();
      setNowPlayingMoviesList([{ id: "dummy1" }, ...tmpNowPlayping.results, { id: "dummy2" }]);

      let tmpUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tmpUpcoming.results);

      let tmpPopular = await getPopularMoviesList();
      setPopularMoviesList(tmpPopular.results);
    })();
  }, []);

  const searchMovieFunction = () => {
    navigation.navigate("Search");
  };

  if (
    nowPlayingMoviesList == undefined &&
    nowPlayingMoviesList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upcomingMoviesList == undefined &&
    upcomingMoviesList == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scollViewContainer}
      >
        <StatusBar hidden />

        <View style={styles.InputHeaderContainer}>
          <InputHeader
            searchFunction={searchMovieFunction}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        </View>

        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar hidden />

      <View style={styles.InputHeaderContainer}>
        <InputHeader
          searchFunction={searchMovieFunction}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </View>
      <CategoryHeader title={"Phim đang chiếu"} />

      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id}
        bounces={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => {
          if (!item.original_title) {
            return (
              <View
                style={{
                  width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2,
                }}
              ></View>
            );
          }
          return (
            <MovieCard
              shoudlMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push("MovieDetails", { movieid: item.id });
              }}
              cardWidth={width * 0.7}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMoviesList?.length - 1 ? true : false}
              title={item.title}
              imagePath={baseImagePath("w780", item.poster_path)}
              genre={item.genre_ids.slice(0, 3)}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          );
        }}
      />

      <CategoryHeader title={"Phổ biến"} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        snapToInterval={width / 3 + SPACING.space_36}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubmovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.navigate("MovieDetails", { movieid: item.id });
            }}
            cardWidth={width / 3}
            idFirst={index == 0 ? true : false}
            isLast={index == popularMoviesList?.length - 1 ? true : false}
            title={item?.title}
            imagePath={baseImagePath("w342", item?.poster_path)}
          />
        )}
      />
      <CategoryHeader title={"Mới nhất"} />
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item: any) => item.id}
        snapToInterval={width / 3 + SPACING.space_36}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubmovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.navigate("MovieDetails", { movieid: item.id });
            }}
            cardWidth={width / 3}
            idFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item?.title}
            imagePath={baseImagePath("w342", item?.poster_path)}
          />
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
