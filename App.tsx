import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadAsync, useFonts } from 'expo-font'

import { LocationProvider } from './src/contexts/LocationContext';
import { GasStationProvider } from './src/contexts/GasStationContext';
import Home from './src/pages/Home';

export default function App() {

  useEffect(() => {    
    let load = async () => {
      await loadAsync({
        'Kanit_Bold': require('./src/assets/fonts/Kanit-BoldItalic.ttf'),
        'Kanit': require('./src/assets/fonts/Kanit-Italic.ttf'),
        'Kanit_Light': require('./src/assets/fonts/Kanit-LightItalic.ttf')
      });
    }

    load()
  }, [])

  useFonts({
    Kanit: require('./src/assets/fonts/Kanit-Italic.ttf'),
    Kanit_Bold: require('./src/assets/fonts/Kanit-BoldItalic.ttf'),
    Kanit_Light: require('./src/assets/fonts/Kanit-LightItalic.ttf')
  })

  return (
    <SafeAreaProvider>
      <LocationProvider>
        <GasStationProvider>
          <Home />
          <StatusBar animated translucent/>
        </GasStationProvider>
      </LocationProvider>
    </SafeAreaProvider>
  )
}
