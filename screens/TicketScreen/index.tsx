import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const TicketScreen = ({ navigation, route }: any) => {
  const [ticketData, setTicketData] = useState<any>(route.params);

  useEffect(() => {
    (async () => {
      try {
        const ticket = await SecureStore.getItem("ticket");
        if (ticket !== undefined && ticket !== null) {
          setTicketData(JSON.parse(ticket));
        }

      } catch (error) {
        console.error("Something went wrong while getting Data", error);
      }
    })();
  }, [route]);
  
  console.log('TICKET DATA', ticketData);

  return (
    <View>
      <Text>TicketScreen</Text>
    </View>
  );
};

export default TicketScreen;
