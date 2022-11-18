<p align="center">
  <a href="https://www.youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/46301285/192062566-6c519b30-1b4a-4fc1-afcb-2ca173201618.jpeg">
      <img alt="Animated Remotion Logo" src="https://user-images.githubusercontent.com/46301285/192062571-5f85ad7d-3f8d-4005-b118-9e7a8a57cb9c.png" height="100px" style="border-radius: 50px">
    </picture>
  </a>
</p>

This branch contains all (link to) source code or files used in the videos for my [YouTube Channel](https://youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1) specific to [react-native](https://reactnative.dev).

## Get Started

Cloning the repo:

```sh
git clone

// navigate to project
cd youtube

// Switch to a react-native branch
git checkout react-native

// Navigate to particular project's source code
cd path/to/folder
```

If you want to clone a specific source folder from a particular video, you can do so, using following git commands (more details [here](https://stackoverflow.com/a/52269934)):

```sh
git clone --depth 1 --filter=blob:none --sparse --single-branch --branch react-native https://github.com/Aashu-Dubey/youtube.git

// navigate to project
cd youtube

// Here we'll clone only specific folder
git sparse-checkout set path/to/file/or/folder/to/clone

// Navigate to project folder
cd path/to/cloned/folder
```

## Videos

| No. | 📹 Video                                         | 🔧 Tech      | 🔗 Links                                                                                                                                                                |
| --- | ------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | [Animated Toolbar](https://youtu.be/27pTWrcEDC4) | react-native | Source: [Video version](./src/animatedToolbar#readme) \| [Original](https://github.com/Aashu-Dubey/react-native-animation-samples/tree/main/src/samples/custom_toolbar) |

## Playlists

1. [React Native Animations](https://www.youtube.com/playlist?list=PLpnMM6hhRcchaS1uSpMZfAKYTxZWIlzzN)
