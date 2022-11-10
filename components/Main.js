import React, {useState} from 'react';

import { StyleSheet, Text, View,Button} from 'react-native';


export default function Main({navigation}) {
  const loadScene = () => {
    navigation.navigate('Tasks');
  }

  return (
    <View style={styles.container}>
     <Text>Стартовая страница</Text>
     <Button title='Перейти к событиям' onPress={loadScene}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
   
});
