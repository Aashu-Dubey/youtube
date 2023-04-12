<p align="center">
  <a href="https://www.youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/46301285/192062566-6c519b30-1b4a-4fc1-afcb-2ca173201618.jpeg">
      <img alt="Animated Remotion Logo" src="https://user-images.githubusercontent.com/46301285/192062571-5f85ad7d-3f8d-4005-b118-9e7a8a57cb9c.png" height="100px" style="border-radius: 50px">
    </picture>
  </a>
</p>

This branch contains all (link to) source code or files used in the videos for my [YouTube Channel](https://www.youtube.com/channel/UCAGVoY1fr4ki91Y8ufH1pQQ?sub_confirmation=1) specific to [Blender](https://www.blender.org).

## Get Started

<details>
<summary>Cloning the repo:</summary>

```sh
git clone

// navigate to project
cd youtube

// Switch to a blender branch
git checkout blender

// Navigate to particular video's source code
cd path/to/folder
```

If you want to clone a specific source folder from a particular video, you can do so, using following git commands (more details [here](https://stackoverflow.com/a/52269934)):

```sh
git clone --depth 1 --filter=blob:none --sparse --single-branch --branch blender https://github.com/Aashu-Dubey/youtube.git

// navigate to project
cd youtube

// Here we'll clone only specific folder
git sparse-checkout set path/to/file/or/folder/to/clone

// Navigate to project folder
cd path/to/cloned/folder
```

</details>

## Videos

| No. | 🎥 Video                                                                                                                                                                                                                                                                                     | 🔧 Tech               | 🔗 Links                                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------- |
| 0   | Highlight objects in your video<br /><p align="center"><a href="https://youtu.be/RfW-6KKXOTY" title="Highlight objects using Blender video editing"><img src="https://i.ytimg.com/vi/RfW-6KKXOTY/maxresdefault.jpg" height="80px" alt="Highlight objects using Blender Thumbnail" /></a></p> | Blender Video Editing | [:octocat: Source](./highlight_objects) |

## Playlists

| :tv: Playlist                                                                   |                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Blender](https://youtube.com/playlist?list=PLpnMM6hhRccjGelfoMvunMpY4L8pIcn1a) | <a href="https://youtube.com/playlist?list=PLpnMM6hhRccjGelfoMvunMpY4L8pIcn1a" title="Blender Playlist"><img src="https://i.ytimg.com/vi/RfW-6KKXOTY/maxresdefault.jpg" height="120px" alt="Blender playlist thumbnail" /></a> |
