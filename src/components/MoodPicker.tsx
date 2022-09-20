import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { moodOptions } from '../assets/emojis';
import { MoodOptionType } from '../Types';
import { theme } from '../theme';
import { PressableArea } from './PressableArea';

export const MoodPicker: React.FC = () => {
    const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

    return (
        <View style={ styles.moodList }>
            {
                moodOptions.map(option => (
                    <View style={ styles.moodBox }>
                        <PressableArea key={ option.description } style={ [styles.moodStyle, option.emoji === selectedMood?.emoji && styles.moodSeletedStyle] } onPress={ () => setSelectedMood(option) }>
                            <Text>
                                { option.emoji }
                            </Text>
                        </PressableArea>
                        <Text style={ styles.moodText }>{ option.emoji === selectedMood?.emoji && selectedMood.description }</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    moodList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    moodBox: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    moodStyle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
    },
    moodSeletedStyle: {
        backgroundColor: theme.colorPurple,
        borderWidth: 2,
        borderColor: theme.colorWhite
    },
    moodText: {
        top: -8,
        fontSize: 17,
        fontWeight: '800',
        color: theme.colorLavender
    }
})