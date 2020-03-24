import React from 'react';
import {Provider as PaperProvider, DefaultTheme, Text} from 'react-native-paper';
import MainNavigator from "./Navigation/MainNavigator";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#24126e',
      accent: '#d70096',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <MainNavigator />
    </PaperProvider>
  );
}
