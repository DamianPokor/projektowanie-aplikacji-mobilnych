import React from "react";
import { View } from "react-native";
import MapImage from "../../../1_core_components/Workspace/zadanie_2/MapImage";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MapImage />
        </View>
    );
};

export default HomeScreen;
