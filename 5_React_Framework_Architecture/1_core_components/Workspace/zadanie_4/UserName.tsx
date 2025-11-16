import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserNameProps {
    name: string;
}

const UserName: FC<UserNameProps> = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Imię: {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#e0f7fa',
        borderRadius: 8,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default UserName;