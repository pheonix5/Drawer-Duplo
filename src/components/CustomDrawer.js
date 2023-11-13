import { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { RouteContext } from '../context/RouteContext';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


export default function CustomDrawer(props) {
  const { pageRendered } = useContext(RouteContext)

  if (pageRendered === 'Chat') {
    return (
      <DrawerContentScrollView {...props} style={styles.DrawerContent}>
        <DrawerItemList {...props} />
        <TouchableOpacity style={{
          width: '100%',
          marginLeft: 11,
          padding: 10,
          flexDirection: 'row',
        }}>
          <FontAwesome5 name="arrow-left" size={24} color="#FFF" />
          <Text style={{ color: '#FFF', fontWeight: 'bold', marginLeft: 10 }}>Voltar</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    )
  }else{
    return(
      <DrawerContentScrollView {...props} style={styles.DrawerContent}>
        <DrawerItemList {...props} />
        <TouchableOpacity style={{
          width: '100%',
          marginLeft: 11,
          padding: 10,
          flexDirection: 'row',
        }}>
          <FontAwesome5 name="discord" size={24} color="#FFF" />
          <Text style={{ color: '#FFF', fontWeight: 'bold', marginLeft: 10 }}>Discord</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    )
  }

  
}

const styles = StyleSheet.create({
  DrawerContent: {
    width: '100%',
    marginTop: 10
  },

})