# react-native-detox-demo

Demo project for Detox 20.x based on React Native 0.70.x


## Setup

```bash
brew tap wix/brew
brew install applesimutils

yarn add detox --dev

detox init
```

## Testing

```bash
# iOS
detox build --configuration ios.sim.debug
detox test --configuration ios.sim.debug

# Android
detox build --configuration android.emu.debug
detox test --configuration android.emu.debug
```
