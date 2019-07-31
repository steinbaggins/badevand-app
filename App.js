import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Application from './src/Application';

export default function App() {
  return (
    <Application />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
