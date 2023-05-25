# RNYouTube

This project contains the code samples used for the video tutorials on my [Youtube Channel](https://www.youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1) specific to react-native animations.

## 📽️ 🛠 Samples

1. Animated Toolbar:- [Video](https://youtu.be/27pTWrcEDC4) | [Source](./src/animatedToolbar#readme)

2. Spread Card effect (Color Swatch):- [Video](https://youtu.be/lK6rAktDQJQ) | [Source](./src/colorSwatch#readme)

## 💪🏼 Get Started

Cloning the repo:

```sh
git clone

// navigate to project
cd youtube

// Switch to a react-native branch
git checkout react-native

// Navigate to project root
cd rn_youtube
```

If you want to clone only this specific folder, you can do so, using following git commands (more details [here](https://stackoverflow.com/a/52269934)):

```sh
git clone --depth 1 --filter=blob:none --sparse --single-branch --branch react-native https://github.com/Aashu-Dubey/youtube.git

// navigate to project
cd youtube

// Here we'll clone only this folder
git sparse-checkout set rn_youtube

// Navigate to boilerplate project
cd rn_youtube
```

## 🧑🏻‍💻 Runing on local

First, make sure you have required development setup for react-native, see the guide [here](https://reactnative.dev/docs/environment-setup).

First install the dependencies:

```sh
yarn install or npm install
```

Use following commands to run the the project for a particular platform:

### 🍎📱 Running on iOS

```sh
// First install the pod files
npx pod-install ios
// or
cd ios && pod-install && cd ..

// running on simulator/device
npx react-native run-ios
// or 'cd ios' and open 'rn_youtube.xcworkspace' then run from Xcode
```

### 🤖📱 Running on Android

```sh
// running on Android emulator/device
npx react-native run-android
```

### 🌐 Running on Web

```sh
# From project's root, run
yarn run web

# Logs will mention where the project is running, for ex. 'http://localhost:8080/'
# then open that localhost url on any web browser.
```

### 🪟🖥 Running on Windows

See the react-native-windows [guide](https://microsoft.github.io/react-native-windows/docs/getting-started) for details about required development setup.

```sh
npx react-native run-windows
```

### 🍎🖥 Running on macOS

See the react-native-macos [guide](https://microsoft.github.io/react-native-windows/docs/rnm-getting-started) for details about required development setup.

```sh
// At project root
bundle install

// Install pods
cd macos && pod install && cd ..

// run the project as macos application
npx react-native run-macos
```
