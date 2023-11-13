import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AnimatedView from '../../components/AnimatedView';

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

  return (
    <AnimatedView>
      <View style={styles.container}>
        <Text>Ola mundo</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.buttonText}>IR PARA O CHAT</Text>
        </TouchableOpacity>
      </View>
    </AnimatedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    padding: 10,
    backgroundColor: '#224455',
    borderRadius: 8
  },
  buttonText:{
    color: '#FFF',
    fontWeight: 'bold'
  }
});
