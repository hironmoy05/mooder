import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useAppContext } from '../App.Provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const HistoryScreen = () => {
    const appContext = useAppContext();
    return (
        <View style={ styles.container }>
            {
                appContext.moodList.map(item => (
                    <MoodItemRow item={ item } key={ item.timestamp } />
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

