import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AnimatedView from '../../components/AnimatedView';

export default function AddMesa() {
  return (
    <AnimatedView>
      <View style={styles.container}>
        <Text>Tela Adicionar Mesa</Text>
        <Text>Formulario para criar mesa</Text>
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