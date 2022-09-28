<p align="center">
  <a href="https://www.youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/46301285/192062566-6c519b30-1b4a-4fc1-afcb-2ca173201618.jpeg">
      <img alt="Animated Remotion Logo" src="https://user-images.githubusercontent.com/46301285/192062571-5f85ad7d-3f8d-4005-b118-9e7a8a57cb9c.png" height="100px" style="border-radius: 50px">
    </picture>
  </a>
</p>

This branch contains all (link to) source code or files used in the videos for my [YouTube Channel](https://www.youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1) specific to [Ionic](https://ionicframework.com/).

## Get Started

Cloning the repo:

```
git clone

// navigate to project
cd youtube

// Switch to a ionic branch
git checkout ionic

// Navigate to particular video's source code
cd path/to/folder
```

If you want to clone a specific source folder from a particular video, you can do so, using following git commands (more details [here](https://stackoverflow.com/a/52269934)):

```
git clone --depth 1 --filter=blob:none --sparse --single-branch --branch ionic https://github.com/Aashu-Dubey/youtube.git

// navigate to project
cd youtube

// Here we'll clone only specific folder
git sparse-checkout set path/to/file/or/folder/to/clone

// Navigate to project folder
cd path/to/cloned/folder
```

## Videos

| No. | 📹 Video                                                             | 🔧 Tech                     | 🔗 Links                                                                                                                                                  |
| --- | -------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | [Implement List Animation](https://youtu.be/9ssPXzVecas)             | Ionic 6, Angular            | [Source](https://github.com/Aashu-Dubey/Ionic-UI-Templates)<br/>[Article](https://medium.com/@aashu_dubey/list-animation-in-ionic-6-angular-c01930fbf527) |
| 1   | [Sidebar/Drawer animation](https://youtu.be/TH75SYPs5Lo)             | Ionic 6, Angular            | [Source](https://github.com/Aashu-Dubey/Ionic-UI-Templates)                                                                                               |
| 2   | [Menu icon transition animation](https://youtu.be/gsuDITVELB4)       | Ionic 6, Angular            | [Source](https://github.com/Aashu-Dubey/Ionic-UI-Templates)                                                                                               |
| 3   | [Create project specific local plugin](https://youtu.be/q5kQcTqPtGY) | Ionic 6, Angular, Capacitor | [Source](https://github.com/Aashu-Dubey/youtube/tree/ionic/local_plugin)                                                                                  |

## Playlists

1. [Ionic Tutorials](https://www.youtube.com/playlist?list=PLpnMM6hhRccgJyULbdCPo9n0ufqF4gNQX)
2. [Ionic UI Templates](https://www.youtube.com/playlist?list=PLpnMM6hhRcchVmD6K1xJicQ7dJTa9uUrg)
