import React, { createContext, useContext, useState, useCallback } from 'react';

import { MoodOptionType, MoodOptionWithTimestamp } from './Types';

type AppContextType = {
    moodList: MoodOptionWithTimestamp[];
    handleSelectMood: (mood: MoodOptionType) => void
}

const defaultValue = {
    moodList: [],
    handleSelectMood: () => { }
}

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
    const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

    const handleSelectMood = useCallback((mood: MoodOptionType) => {
        setMoodList(current => {
            return [...current, { mood, timestamp: Date.now() }]
        })
    }, [])

    return (
        <AppContext.Provider value={ { moodList, handleSelectMood } }>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext); 