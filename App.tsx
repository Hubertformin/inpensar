import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import useColorScheme from './hooks/colorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { View } from './components/Themed';

export default function App() {
  const colorScheme = useColorScheme();
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    //initialize app then hide splashscreen
    initApp();
  }, [])

  async function initApp() {
    let customFonts = {
      'Gilroy': require('./assets/fonts/gilroy/Gilroy-Regular.ttf'),
      'Gilroy-medium': require('./assets/fonts/gilroy/Gilroy-Medium.ttf'),
      'Gilroy-semibold': require('./assets/fonts/gilroy/Gilroy-Semibold.ttf'),
      'Gilroy-bold': require('./assets/fonts/gilroy/Gilroy-Bold.ttf'),
    };
    // load fonts
    await Font.loadAsync(customFonts);
    setAppLoaded(true);
  }

  if (appLoaded) {
    return (
      <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
    );
  } else {
    return (<View></View>);
  }
}
