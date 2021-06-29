import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Master_Page from './Source/Screens/MasterScreen';
import {  DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ed1c24',
    accent: '#ff545a',
  },
};

export default function App() {
  return (
      <>
        <StatusBar hidden={false} backgroundColor='white' />

          <PaperProvider theme={theme}>
        <Master_Page />
        </PaperProvider>

      </>
  );
}
