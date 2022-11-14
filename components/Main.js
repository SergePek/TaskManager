import React, {useState} from 'react';

import { StyleSheet, Text, View,Button} from 'react-native';


export default function Main({navigation}) {
  const loadScene = () => {
    navigation.navigate('Tasks');
  }

  return (
    <View style={styles.container}>
     <Text style={{flex:1, fontSize:30}}>Стартовая страница</Text>
     <Button style={{ flex:1}} title='Перейти к событиям' onPress={loadScene}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 
  }
   
});
