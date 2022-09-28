# Capacitor Local plugin

<a href="https://youtu.be/q5kQcTqPtGY">
  <img alt="How to create project specific local plugin | Ionic 6 | Capacitor" align="right" src="https://i.ytimg.com/vi/q5kQcTqPtGY/maxresdefault.jpg" height="180px">
</a>

This folder contains files for [this](https://youtu.be/q5kQcTqPtGY) youtube video, explaining how to create project specific local plugin using Capacitor.
<br />

Video:- https://youtu.be/q5kQcTqPtGY

Playlist:- https://www.youtube.com/playlist?list=PLpnMM6hhRccgJyULbdCPo9n0ufqF4gNQX

[boilerplate](./boilerplate):- Initial project before the implementation.

[statusbar_height_sample](./statusbar_height_sample):- final implementation.

## Get Started

Cloning the repo:

```
git clone

// navigate to project
cd youtube

// Switch to a ionic branch
git checkout ionic

// Navigate to boilerplate project
cd local_plugin/boilerplate
```

If you want to clone only this specific folder, you can do so, using following git commands (more details [here](https://stackoverflow.com/a/52269934)):

```
git clone --depth 1 --filter=blob:none --sparse --single-branch --branch ionic https://github.com/Aashu-Dubey/youtube.git

// navigate to project
cd youtube

// Here we'll clone only this folder
git sparse-checkout set local_plugin
//or
git sparse-checkout set local_plugin/boilerplate

// Navigate to boilerplate project
cd local_plugin/boilerplate
```

## Run

Use following command to run the the project

```
npm install or yarn install

ionic cap run android
// or
ionic cap run ios
```
