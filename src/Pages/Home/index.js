import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function Home() {
  // Propriedades da animação
  const [showMenu, setShowMenu] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const offsetValue = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();
  const drawerStatus = useDrawerStatus();

  useEffect(() => {
    // Quando o Drawer é aberto, ajusta a escala para 0.88 e mostra o menu
    if (drawerStatus === 'open') {
      Animated.timing(scaleValue, {
        toValue: 0.88,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(offsetValue, {
        toValue: 30,
        duration: 300,
        useNativeDriver: false
      }).start();

      setShowMenu(true);
    } else {
      // Quando o Drawer é fechado, volta à escala normal e oculta o menu
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(offsetValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();

      setShowMenu(false);
    }
  }, [drawerStatus]);

  const toggleDrawer = () => {
    // Inverte o estado do Drawer quando o botão é pressionado
    if (drawerStatus === 'open') {
      navigation.closeDrawer();
    } else {
      navigation.openDrawer();
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderRadius: showMenu ? 15 : 0,
          transform: [
            { scale: scaleValue },
            { translateX: offsetValue }
          ],
        },
      ]}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Ionicons
          name={showMenu ? 'close-sharp' : 'menu'}
          size={40}
          color="#FFF"
          style={{ marginLeft: 5 }} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    padding: 10,
    backgroundColor: '#313338',
    alignItems: 'flex-end'
  },
});
