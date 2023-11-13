import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import RouteProvider from './src/context/RouteContext';

import Routes from './src/routes'

import DrawerRight from './src/routes/DrawerRight';

export default function App() {
  return (
    <RouteProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#313338' style='light' />
        <Routes />
      </NavigationContainer>
    </RouteProvider>
  )
}
