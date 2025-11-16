import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const FlexboxLayout = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.blueBox} />

            <View style={styles.redBox} />

            <View style={styles.bottomRowContainer}>

                <View style={styles.yellowBox} />
                <View style={styles.yellowBox} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    blueBox: {
        flex: 1,
        backgroundColor: '#4285F4',
    },
    redBox: {
        flex: 2,
        backgroundColor: '#DB4437',
    },
    bottomRowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    yellowBox: {
        flex: 1,
        backgroundColor: '#F4B400',
        margin: 2,
    },
});

export default FlexboxLayout;