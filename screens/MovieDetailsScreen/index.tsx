import { useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { baseImagePath, movieCastDetails, movieDetails } from "../../api/apicalls";
import { LinearGradient } from "expo-linear-gradient";
import AppHeader from "../../components/AppHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CategoryHeader from "../../components/CategoryHeader";
import CastCard from "../../components/CastCard";

import styles from "./style";
import { COLORS, FONTSIZE } from "../../theme/theme";

const getMovieDetails = async (movieid: number) => {
  try {
    let response = await fetch(movieDetails(movieid));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("Lỗi getMovieDetails", error);
  }
};

const getMovieCastDetails = async (movieid: number) => {
  try {
    let response = await fetch(movieCastDetails(movieid));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error("Lỗi getMovieCastDetails", error);
  }
};

const MovieDetailsScreen = ({ navigation, route }: any) => {
  const [movieData, setMovieData] = useState<any>(undefined);
  const [movieCastData, setMovieCastData] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      let tmpMovieData = await getMovieDetails(route.params.movieid);
      setMovieData(tmpMovieData);

      let tmpCastMovieData = await getMovieCastDetails(route.params.movieid);
      setMovieCastData(tmpCastMovieData.cast.slice(0, 10));
    })();
  }, []);

  if (
    movieData == undefined &&
    movieData == null &&
    movieCastData == undefined &&
    movieCastData == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scollViewContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.appHeaderContainer}>
          <AppHeader name="close" action={() => navigation.goBack()} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <>
      <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ImageBackground
            source={{ uri: baseImagePath("w780", movieData?.backdrop_path) }}
            style={styles.imageBG}
          >
            <LinearGradient
              colors={[COLORS.BlackRGB10, COLORS.Black]}
              style={styles.linearGradient}
            >
              <View style={styles.appHeaderContainer}>
                <AppHeader name="close" action={() => navigation.goBack()} />
              </View>
            </LinearGradient>
          </ImageBackground>

          <View style={styles.imageBG}>
            <Image
              source={{ uri: baseImagePath("w342", movieData?.poster_path) }}
              style={styles.cardImage}
            />
          </View>

          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" style={styles.timeIcon} />
            <Text style={styles.runtimeText}>
              {Math.floor(movieData?.runtime / 60)}h {Math.floor(movieData?.runtime % 60)}m
            </Text>
          </View>

          <View>
            <Text style={styles.title}>{movieData?.title}</Text>
            <View style={styles.genreContainer}>
              {movieData?.genres.map((item: any) => {
                return (
                  <View style={styles.genreBox} key={item.id}>
                    <Text style={styles.genreText}>{item.name}</Text>
                  </View>
                );
              })}
            </View>
            <Text style={styles.tagline}>{movieData?.tagline}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.rateContainer}>
              <FontAwesome name="star" style={styles.starIcon} />
              <Text style={styles.runtimeText}>
                {movieData?.vote_average.toFixed(1)} ({movieData?.vote_count})
              </Text>

              <Text style={styles.runtimeText}>
                {movieData?.release_date.substring(8, 10)}{" "}
                {new Date(movieData?.release_date).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {movieData?.release_date.substring(0, 4)}
              </Text>
            </View>

            <Text style={styles.disText}>{movieData?.overview}</Text>
          </View>

          <View>
            <CategoryHeader title={"Diễn viên"} />
            <FlatList
              data={movieCastData}
              keyExtractor={(item: any) => item.id}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.containerGap24}
              renderItem={({ item, index }) => (
                <CastCard
                  shouldMarginatedAtEnd={true}
                  cardWidth={80}
                  isFirst={index == 0 ? true : false}
                  isLast={index == movieCastData?.length - 1 ? true : false}
                  imagePath={baseImagePath("w185", item.profile_path)}
                  title={item?.original_name}
                  // subtitle={item.character}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.conatainerBtn}
        onPress={() =>
          navigation.push("SeatBooking", {
            BgImage: baseImagePath("w780", movieData.backdrop_path),
            PosterImage: baseImagePath("original", movieData.poster_path),
          })
        }
      >
        <View style={styles.boxBtn}>
          <Ionicons name="ticket-outline" style={styles.iconTicket} />
          <Text style={styles.buttonText}>Đặt vé</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MovieDetailsScreen;
