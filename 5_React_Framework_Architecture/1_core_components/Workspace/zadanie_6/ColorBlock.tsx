import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

interface ColorBlockProps {
    color: string;
    size: number;
}

const ColorBlock: FC<ColorBlockProps> = ({ color, size }) => {
    const dynamicStyle = {
        backgroundColor: color,
        width: size,
        height: size,
    };

    return <View style={[styles.block, dynamicStyle]} />;
};

const styles = StyleSheet.create({
    block: {
        margin: 10,
    },
});

export default ColorBlock;