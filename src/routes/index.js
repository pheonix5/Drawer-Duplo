import { createDrawerNavigator } from '@react-navigation/drawer'
import { useContext } from 'react';
import { View } from 'react-native'
import { RouteContext } from '../context/RouteContext';
// Páginas

import CustomDrawer from '../components/CustomDrawer';

// Mockup
import { homeDrawer, chatDrawer } from '../config/mockupDrawer';


const Drawer = createDrawerNavigator();


export default function Routes() {
  const { pageRendered } = useContext(RouteContext);

  return (
    <View style={{ flex: 1, backgroundColor: '#202124' }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'left',
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
        drawerContent={CustomDrawer}
      >

        {pageRendered === "Chat" ? (

          chatDrawer.map((drawerScreen) => (
            <Drawer.Screen
              key={drawerScreen.id}
              name={drawerScreen.name}
              component={drawerScreen.component}
              options={{
                title: drawerScreen.options.title,
                drawerIcon: ({ focused }) => {
                  if (focused) {
                    return drawerScreen.options.iconOnFocus;
                  }
                  return drawerScreen.options.iconNotFocus
                }
              }}

            />
          ))

        ) : (

          homeDrawer.map((drawerScreen) => (
            <Drawer.Screen
              key={drawerScreen.id}
              name={drawerScreen.name}
              component={drawerScreen.component}
              options={{
                title: drawerScreen.options.title,
                drawerIcon: ({ focused }) => {
                  if (focused) {
                    return drawerScreen.options.iconOnFocus;
                  }
                  return drawerScreen.options.iconNotFocus
                }
              }}

            />
          ))

        )}




      </Drawer.Navigator>
    </View>
  )
}