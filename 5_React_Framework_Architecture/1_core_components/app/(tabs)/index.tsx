import React from "react";
import { View, StyleSheet } from "react-native";
import DateDisplay from "../../../1_core_components/Workspace/zadanie_1/DateDisplay";
import MapImage from "../../../1_core_components/Workspace/zadanie_2/MapImage";
import StyledPizzaText from "@/Workspace/zadanie_3/StyledText";
import UserName from "@/Workspace/zadanie_5/UserName";
import UserSurname from "@/Workspace/zadanie_5/UserSurname";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <DateDisplay />
            <MapImage />
            <StyledPizzaText />
            <UserName name="Damian" />
            <UserSurname surname="Pokorski" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    }
});

export default HomeScreen;