import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import format from 'date-fns/format';

import { MoodItemRowProps } from '../Types';
import { theme } from '../theme';


export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
    return (
        <View style={ styles.moodItem }>
            <View style={ styles.iconAndDescription }>
                <Text style={ styles.moodValue }>{ item.mood.emoji }</Text>
                <Text style={ styles.moodDescription }>{ item.mood.description }</Text>
            </View>
            <Text style={ styles.moodDate }>
                { format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa") }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    moodItem: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconAndDescription: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    moodValue: {
        textAlign: 'center',
        fontSize: 40,
        marginRight: 10,
    },
    moodDescription: {
        fontSize: 18,
        color: theme.colorPurple,
        fontWeight: 'bold',
    },
    moodDate: {
        textAlign: 'center',
        color: theme.colorLavender,
    },
})