# Animated Toolbar

<a href="https://youtu.be/27pTWrcEDC4">
  <img alt="Animated toolbar in react-native" align="right" src="https://i.ytimg.com/vi/27pTWrcEDC4/maxresdefault.jpg" height="180px">
</a>

This folder contains source code used for [this](https://youtu.be/27pTWrcEDC4) youtube video, where we create gesture based animated toolbar from scratch.

> **Note**:- This video and the included sample is part of [this repo](https://github.com/Aashu-Dubey/react-native-animation-samples), which contains the original and more advance version of this implementation [here](https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/custom_toolbar), also with other animation samples.

---

## 📽️ [Video](https://youtu.be/27pTWrcEDC4) | [Playlist](https://www.youtube.com/watch?v=27pTWrcEDC4&list=PLpnMM6hhRcchaS1uSpMZfAKYTxZWIlzzN&index=1)

[ToolbarReanimated](./ToolbarReanimated.tsx):- The original code used in the video, using the [reanimated](https://github.com/software-mansion/react-native-reanimated) and [gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) packages for the implementation.

[ToolbarAnimated](./ToolbarAnimated.tsx):- Alternative solution using the in-built Animated and gesture APIs for the same implementation.

## ✨ Some features

1. Toolbar buttons expands on long click
2. After long press on any button, using gestures haptics play as you scrub through the items (No conflict with default list scrolling)
3. The items scale up/down as they become show/hide while scrolling.
4. Scroll Rubberbanding effect when scrolling past the top or bottom, which stretches the item's spacing out (works on iOS only)

## 📦 Packages used

1. [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler):- Long & Pan gesture to activate the items
2. [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated):- All the animation logic & also for scroll handler
3. [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons):- Google Material icons

## 🌻 Motivation

Inspired by [this original iOS implementation](https://twitter.com/jmtrivedi/status/1517561485622321152) by [jtrivedi](https://github.com/jtrivedi).

---

See the instructions [here](../../#readme) to run the project on your local machine for a particular platform.
