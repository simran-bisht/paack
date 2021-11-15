# React-Native-Paack-Delivery
A delivery app built with React Native, to track the location of driver and the status of delivery.

It includes the following features:

- Displaying the list of deliverables.
- on click of particular delivery navigating to details page.
- Activating delivery by clicking Make Active button.
- Finishing the delivery by clicking Delivered/ UnDelivered button.

## Prerequisites

- React Native development environment
- Node.js
- npm
- Android Studio

## Getting started

1. Clone the repo:
```
git clone https://github.com/simran-bisht/paack.git
```
2. Install the dependencies:

```
cd paackclient
npm install
```
3. Configure the ANDROID_HOME environment variable:

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
4. Start Metro Bundler
```
npx react-native start
```
5. Start Application in new terminal:
```
npx react-native run-android
```
