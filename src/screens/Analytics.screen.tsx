import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AnalyticsScreen = () => {
    return (
        <View style={ styles.container }>
            <Text>MyComponent</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

