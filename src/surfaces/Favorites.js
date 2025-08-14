import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import ListOfFavorites from "../components/ListOfFavorites";
import { Text, View } from "react-native";


export default function Favorites() {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          Favorites
        </Text>
      </View>
      <ListOfFavorites />
    </SafeAreaView>
  );
}
