import React from "react";
import { View } from "react-native";
import DateDisplay from "../../../1_core_components/Workspace/zadanie_1/DateDisplay";
import MapImage from "../../../1_core_components/Workspace/zadanie_2/MapImage";
import StyledPizzaText from "@/Workspace/zadanie_3/StyledText";

const HomeScreen = () => {
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <DateDisplay/>
          <MapImage />
          <StyledPizzaText />
      </View>
  );
};

export default HomeScreen;
