import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedView from '../../components/AnimatedView';
import { useRoute } from '@react-navigation/native';

import { RouteContext } from '../../context/RouteContext';


export default function Chat() {
  const { setPageRendered } = useContext(RouteContext);
  const route = useRoute()
  const page = route.name
  
  setPageRendered(page);

  return (
    <AnimatedView>
      <View style={styles.container}>
        <Text>Tela de Chat</Text>
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