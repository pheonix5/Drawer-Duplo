
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View } from 'react-native'
// Páginas


import CustomDrawerRight from '../components/CustomDrawer';

import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Routes from './index';

const Drawer = createDrawerNavigator();

export default function DrawerRight() {

  return (
    <View style={{ flex: 1, backgroundColor: '#202124' }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',

          drawerStyle: {
            flex: 1,
            backgroundColor: '#202124',
            backgroundColor: 'transparent',

            width: '48%',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },

          drawerItemStyle: {
            borderRadius: 8,
          },

          drawerLabelStyle: {
            marginLeft: -25
          },

          drawerActiveBackgroundColor: '#313338',
          drawerActiveTintColor: '#5865F2',

          drawerInactiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#FFF',
        }}
        drawerContent={CustomDrawerRight}
      >


        
      </Drawer.Navigator>
    </View>
  )
}