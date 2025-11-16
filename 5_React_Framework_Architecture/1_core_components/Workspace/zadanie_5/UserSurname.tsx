import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserSurnameProps {
    surname: string;
}

class UserSurname extends Component<UserSurnameProps> {
    render() {
        // Dostęp do propsów przez 'this.props'
        const { surname } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Nazwisko: {surname}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff9c4',
        borderRadius: 8,
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
});

export default UserSurname;