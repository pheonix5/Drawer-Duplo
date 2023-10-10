import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function AddMesa() {
 return (
   <SafeAreaView style={styles.container}>
    <Text>Tela Adicionar Mesa</Text>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})