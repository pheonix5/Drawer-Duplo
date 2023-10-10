
import { createDrawerNavigator } from '@react-navigation/drawer'
import {  View } from 'react-native'
// Páginas
import Home from '../Pages/Home'
import AddMesa from '../Pages/AddMesa'

import CustomDrawer from '../components/CustomDrawer';

import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function Routes() {

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
            // backgroundColor: 'transparent',

            width: '48%',
          },
          sceneContainerStyle:{
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
        drawerContent={CustomDrawer}
      >


        <Drawer.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Início',
            drawerIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Entypo name='home' color={color} size={size} />
              }
              return <Entypo name='home' color='#fff' size={size} />
            }
          }}

        />

        <Drawer.Screen
          name='AddMesa'
          component={AddMesa}
          options={{
            title: 'Adicionar Mesa',
            drawerIcon: ({ color, focused, size }) => {
              if (focused) {
                return <AntDesign name='plus' color={color} size={size} />
              }
              return <AntDesign name='plus' color='#fff' size={size} />
            }
          }}
        />
      </Drawer.Navigator>
    </View>
  )
}