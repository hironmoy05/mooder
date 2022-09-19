import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedLottieView from "lottie-react-native";

import { MoodPicker } from '../components/MoodPicker';

export const HomeScreen: React.FC = () => {
    return (
        <View style={ styles.container }>
            {/* <AnimatedLottieView autoPlay loop source={ require('../assets/lottie/97307-grinning-face-emoji.json') } /> */ }

            <MoodPicker />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
});

