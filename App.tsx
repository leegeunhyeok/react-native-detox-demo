import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

const COLORS = {
  dark: '#333',
  light: '#fff',
} as const;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.dark : COLORS.light,
  };

  const textStyle = {
    color: isDarkMode ? COLORS.light : COLORS.dark,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text testID="label" style={textStyle}>
          Hello, Detox!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
