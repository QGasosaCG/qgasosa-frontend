import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadAsync } from 'expo-font'

import { LocationProvider } from './src/contexts/LocationContext';
import { GasStationProvider } from './src/contexts/GasStationContext';
import { AppProvider } from './src/contexts/AppContext';
import { ConsumptionProvider } from './src/contexts/ConsumptionContext';
import { RefuelProvider } from './src/contexts/RefuelContext';

import Home from './src/pages/Home';
import ModalGasStation from './src/components/ModalGasStation';
import ModalConsumption from './src/components/ModalConsumption';
import Success from './src/components/Success';
import ModalRefuel from './src/components/ModalRefuel';
import { InvoiceProvider } from './src/contexts/InvoiceContext';
import Camera from './src/components/Camera';
import { FuelProvider } from './src/contexts/FuelContext';

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
          <FuelProvider>
            <GasStationProvider>
              <ConsumptionProvider>
                <RefuelProvider>
                  <InvoiceProvider>

    { fontsLoaded ? <>
      
      <Home />
      <ModalConsumption />
      <ModalRefuel />
      <ModalGasStation />
      <Success />
      <Camera />
      
    </> : null }

    <StatusBar animated translucent/>

                  </InvoiceProvider>
                </RefuelProvider>
              </ConsumptionProvider>
            </GasStationProvider>
          </FuelProvider>
        </LocationProvider>
      </AppProvider>
    </SafeAreaProvider>
  )
}
