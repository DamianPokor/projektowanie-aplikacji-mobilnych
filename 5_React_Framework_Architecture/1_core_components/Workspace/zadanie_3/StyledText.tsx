import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyledPizzaText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.italic}>Pizza</Text>
                <Text> to bardzo smaczne włoskie danie. Wykonuje się ją z ciasta drożdżowego. Na ciasto wylewa się sos pomidorowy. Na wierzch kładzie się składniki: </Text>
                <Text style={styles.bold}>kiełbasę, ser żółty, oliwki, paprykę</Text>
                <Text>. Istnieje wiele rodzajów </Text>
                <Text style={styles.italic}>pizzy</Text>
                <Text>, może być mięsna, bezmięsna, rybna lub słodka z </Text>
                <Text style={styles.yellowText}>ananasem</Text>
                <Text>.</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 10,
        margin: 15,
    },
    baseText: {
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'justify',
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
    yellowText: {
        color: 'orange',
        fontWeight: 'bold',
    },
});

export default StyledPizzaText;