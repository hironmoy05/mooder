import AnimatedLottieView from "lottie-react-native";

export const moodOptions = [
    { emoji: <AnimatedLottieView style={ { width: 38, height: 38 } } autoSize autoPlay loop source={ require('../assets/lottie/97307-grinning-face-emoji.json') } />, description: 'Joy' },
    {
        emoji: <AnimatedLottieView style={ { width: 45, height: 45 } } autoPlay loop source={ require('../assets/lottie/10164-blushing-emoji.json') } />, description: 'studious'
    },
    { emoji: <AnimatedLottieView style={ { width: 50, height: 50 } } autoPlay loop source={ require('../assets/lottie/17979-laughing-emoji.json') } />, description: 'pensive' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/28086-wow-emoji.json') } />, description: 'happy' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/53389-yelly-emoji-angry.json') } />, description: 'celebratory' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/56471-emoji-30-lovely-kiss.json') } />, description: 'frustrated' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/70305-love-emoji.json') } />, description: 'love' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/83246-angry-emoji.json') } />, description: 'angry' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/97304-sad-face-emoji.json') } />, description: 'sad' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/9879-smiley-emoji.json') } />, description: 'smiley' },
    { emoji: <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/9973-winking-emoji.json') } />, description: 'winking' },
];