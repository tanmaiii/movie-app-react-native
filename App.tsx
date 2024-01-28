import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import TicketScreen from "./screens/TicketScreen";
import SeatBookingScreen from "./screens/SeatBookingScreen";
import TabNavigator from "./navigators/TabNavigator";

import { COLORS } from "./theme/theme";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
          <Stack.Screen name="SeatBooking" component={SeatBookingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    flex: 1,
  },
});
