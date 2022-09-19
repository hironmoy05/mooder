import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { moodOptions } from '../assets/emojis';
import { MoodOptions } from '../Types';

export const MoodPicker: React.FC = () => {
    return (
        <View style={ styles.moodList }>
            {
                moodOptions.map(option => (
                    <Text key={ option.description } style={ styles.moodText }>
                        { option.emoji }
                    </Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    moodList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    moodText: {
        fontSize: 25,
    }
})