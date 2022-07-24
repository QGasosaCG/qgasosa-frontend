import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadAsync } from 'expo-font'

import { LocationProvider } from './src/contexts/LocationContext';
import { GasStationProvider } from './src/contexts/GasStationContext';
import { AppProvider } from './src/contexts/AppContext';

import Home from './src/pages/Home';
import ModalGasStation from './src/components/ModalGasStation';

export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  useEffect(() => {    

    let load = async () => {
    
      await loadAsync({
        'Kanit_Bold': require('./src/assets/fonts/Kanit-BoldItalic.ttf'),
        'Kanit': require('./src/assets/fonts/Kanit-Italic.ttf'),
        'Kanit_Light': require('./src/assets/fonts/Kanit-LightItalic.ttf'),
        'icons': require('./src/assets/icons/icomoon.ttf')
      });

      setFontsLoaded(true);

    }

    load()
  }, [])

  return (
    <SafeAreaProvider>
      <AppProvider>
        <LocationProvider>
          <GasStationProvider>

            { fontsLoaded ? <>
              
              <Home />
              <ModalGasStation />
               
            </> : null }

            <StatusBar animated translucent/>

          </GasStationProvider>
        </LocationProvider>
      </AppProvider>
    </SafeAreaProvider>
  )
}
