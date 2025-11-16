import React from "react";
import { View } from "react-native";
import MapImage from "../../Workspace/MapImage";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MapImage />
        </View>
    );
};

export default HomeScreen;
