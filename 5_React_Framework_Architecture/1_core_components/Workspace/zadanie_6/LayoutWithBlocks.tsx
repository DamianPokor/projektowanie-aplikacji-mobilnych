import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import ColorBlock from './ColorBlock';

const LayoutWithBlocksScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.header}>Trzy Kolorowe Bloki</Text>

            <View style={styles.container}>
                <ColorBlock color="#DB4437" size={80} />
                <ColorBlock color="#0F9D58" size={80} />
                <ColorBlock color="#4285F4" size={80} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
});

export default LayoutWithBlocksScreen;