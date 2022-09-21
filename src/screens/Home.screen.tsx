import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.Provider';

export const HomeScreen: React.FC = () => {
    const appContext = useAppContext();

    return (
        <View style={ styles.container }>
            <MoodPicker onSelect={ appContext.handleSelectMood } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    moodListStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

