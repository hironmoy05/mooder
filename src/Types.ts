export type MoodOptionType = {
    emoji: Element;
    description: string;
}

export type MoodOptionWithTimestamp = {
    mood: MoodOptionType;
    timestamp: number;
}

export type MoodPickerProps = {
    onSelect: (mood: MoodOptionType) => void;
}

export type MoodItemRowProps = {
    item: MoodOptionWithTimestamp;
}