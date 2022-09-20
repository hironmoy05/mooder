import AnimatedLottieView from "lottie-react-native";

import { MoodOptionType } from "../Types";

const grinningFace = <AnimatedLottieView style={ { width: 40, height: 40 } } autoSize autoPlay loop source={ require('../assets/lottie/97307-grinning-face-emoji.json') } />;
const blushingFace = <AnimatedLottieView style={ { width: 50, height: 50 } } autoSize autoPlay loop source={ require('../assets/lottie/10164-blushing-emoji.json') } />;
const laughingFace = <AnimatedLottieView style={ { width: 60, height: 60 } } autoPlay loop source={ require('../assets/lottie/17979-laughing-emoji.json') } />;
const wowFace = <AnimatedLottieView style={ { width: 55, height: 55 } } autoPlay loop source={ require('../assets/lottie/28086-wow-emoji.json') } />;
const yellyAngryFace = <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/53389-yelly-emoji-angry.json') } />
const lovelyKiss = <AnimatedLottieView style={ { width: 45, height: 45 } } autoPlay loop source={ require('../assets/lottie/56471-emoji-30-lovely-kiss.json') } />;
const loveFace = <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/70305-love-emoji.json') } />;
const angryFace = <AnimatedLottieView style={ { width: 40, height: 40 } } autoPlay loop source={ require('../assets/lottie/83246-angry-emoji.json') } />;
const sadFace = <AnimatedLottieView style={ { width: 45, height: 45 } } autoPlay loop source={ require('../assets/lottie/97304-sad-face-emoji.json') } />;
const smileyFace = <AnimatedLottieView style={ { width: 60, height: 60 } } autoPlay loop source={ require('../assets/lottie/9879-smiley-emoji.json') } />;
const winkingFace = <AnimatedLottieView style={ { width: 60, height: 60 } } autoPlay loop source={ require('../assets/lottie/9973-winking-emoji.json') } />;


export const moodOptions: MoodOptionType[] = [
    { emoji: grinningFace, description: 'grinning' },
    { emoji: blushingFace, description: 'blushing' },
    { emoji: laughingFace, description: 'laughing' },
    { emoji: wowFace, description: 'wow' },
    { emoji: yellyAngryFace, description: 'yellyAngry' },
    { emoji: lovelyKiss, description: 'lovely' },
    { emoji: loveFace, description: 'love' },
    { emoji: angryFace, description: 'angry' },
    { emoji: sadFace, description: 'sad' },
    { emoji: smileyFace, description: 'smiley' },
    { emoji: winkingFace, description: 'winking' },
];