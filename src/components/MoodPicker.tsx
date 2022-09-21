import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { moodOptions } from '../assets/emojis';
import { MoodOptionType, MoodPickerProps } from '../Types';
import { theme } from '../theme';
import { PressableArea } from './PressableArea';

export const MoodPicker: React.FC<MoodPickerProps> = ({ onSelect }) => {
    const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

    const handleSelect = useCallback(() => {
        if (selectedMood) {
            onSelect(selectedMood);
            setSelectedMood(undefined);
        }
    }, [onSelect, selectedMood]);

    return (
        <View style={ styles.container }>
            <Text style={ styles.heading }>How are you right now?</Text>
            <View style={ styles.moodList }>
                {
                    moodOptions.map(option => (
                        <View style={ styles.moodBox } key={ option.description } >
                            <PressableArea style={ [styles.moodStyle, option.emoji === selectedMood?.emoji && styles.moodSeletedStyle] } onPress={ () => setSelectedMood(option) }>
                                <Text>
                                    { option.emoji }
                                </Text>
                            </PressableArea>
                            <Text style={ styles.moodText }>{ option.emoji === selectedMood?.emoji && selectedMood.description }</Text>
                        </View>
                    ))
                }

            </View>
            <Pressable style={ styles.button } onPress={ handleSelect }>
                <Text style={ styles.buttonText }>Choose</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: theme.colorPurple,
        margin: 10,
        borderRadius: 10,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 20,
    },
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
    },
    button: {
        backgroundColor: theme.colorPurple,
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        padding: 10,
    },
    buttonText: {
        color: theme.colorWhite,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})