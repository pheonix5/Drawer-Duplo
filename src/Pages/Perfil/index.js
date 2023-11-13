import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedView from '../../components/AnimatedView';

export default function Perfil() {
  return (
    <AnimatedView>
      <View style={styles.container}>
        <Text>Tela de Perfil</Text>
      </View>
    </AnimatedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})