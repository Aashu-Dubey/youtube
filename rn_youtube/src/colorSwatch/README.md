# Spread Card Effect (Color Swatch)

<a href="https://youtu.be/lK6rAktDQJQ">
  <img alt="Spread card effect in react-native" align="right" src="https://i.ytimg.com/vi/lK6rAktDQJQ/maxresdefault.jpg" height="180px">
</a>

This folder contains source code used for [this](https://youtu.be/lK6rAktDQJQ) youtube video, where we create gesture based color swatch with spread card effect animation from scratch.

> **Note**:- This video and the included sample is part of [this repo](https://github.com/Aashu-Dubey/react-native-animation-samples), which contains the original implementation [here](https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/color_swatch), also with other animation samples.

---

## 📽️ [Video](https://youtu.be/lK6rAktDQJQ) | [Playlist](https://www.youtube.com/watch?v=lK6rAktDQJQ&list=PLpnMM6hhRcchaS1uSpMZfAKYTxZWIlzzN&index=2)

[ColorSwatch](./ColorSwatch.tsx):- The original code used in the video, using the [reanimated](https://github.com/software-mansion/react-native-reanimated) and [gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) packages for the implementation.

_(Not part of the video)_

[ColorSwatchAnimated](./ColorSwatchAnimated.tsx):- Alternative solution using the in-built Animated and gesture APIs for the same implementation (Incomplete).

## ✨ Some features

1. Gesture based color palette, which rotates following the user's touch movement on the screen, every layer having different rotation degree.
2. Open and close palette on click of anchor button at the bottom.
3. Clicking on color changes screen's background.

## 📦 Packages used

1. [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler):- Long & Pan gesture to activate the items.
2. [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated):- All the animation logic for palette rotation.

## 🌻 Motivation

Inspired by [this original SwiftUI implementation](https://twitter.com/philipcdavis/status/1544703548423778311) by [@philipcdavis](https://twitter.com/philipcdavis).

---

See the instructions [here](../../#readme) to run the project on your local machine for a particular platform.
