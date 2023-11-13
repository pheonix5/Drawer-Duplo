import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedView from '../../components/AnimatedView';

export default function MesaInfo() {
  return (
    <AnimatedView>
      <View style={styles.container}>
        <Text>Informacoes da mesa</Text>
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