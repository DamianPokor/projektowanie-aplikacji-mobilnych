import React from 'react';
import {Text} from "react-native";

const DateDisplay = () => {
    const date = new Date().toLocaleDateString();
    return <div>
        <Text>Aktualna Data</Text>
        <Text>{date}</Text>;
    </div>
};

export default DateDisplay;