import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../Types';
import { MoodItemRow } from '../components/MoodItemRow';

export const HomeScreen: React.FC = () => {
    const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

    const handleSelectMood = useCallback((mood: MoodOptionType) => {
        setMoodList(current => {
            return [...current, { mood, timestamp: Date.now() }]
        })
    }, [])

    return (
        <View style={ styles.container }>
            <MoodPicker onSelect={ handleSelectMood } />
            {
                moodList.map(item => (
                    // <View key={ item.timestamp } style={ styles.moodListStyle }>
                    //     <Text>{ item.mood.emoji }</Text>
                    //     <Text style={ { marginLeft: 20 } }>{ new Date(item.timestamp).toString() }</Text>
                    // </View>
                    <MoodItemRow item={ item } key={ item.timestamp } />
                ))
            }
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

