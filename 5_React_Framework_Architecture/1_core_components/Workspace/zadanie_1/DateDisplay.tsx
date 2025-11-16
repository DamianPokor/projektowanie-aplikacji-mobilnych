import React from 'react';
import {Text} from "react-native";

const DateDisplay = () => {
    const date = new Date().toLocaleDateString();
    return <div>
        <h2>Aktualna Data</h2>
        <Text>{date}</Text>;
    </div>
};

export default DateDisplay;