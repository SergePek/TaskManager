import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ListItem from './ListItem';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTasks } from '../store/reduser';

export default function Tasks() {

  const dispatch = useDispatch();

  const taskss = useSelector(state => state.task.tasks);

  console.log('Tasks : ' + taskss.length);

  return (
    <View style={styles.container}>

      <Form  />
      <View>
        <FlatList data={taskss} renderItem={({ item }) => (
          <ListItem elem={item} />
        )} />

      </View>
      {taskss.length>0 && <Button style={styles.button}  title='Удалить события' onPress={() => { dispatch(deleteTasks()) }} />}
    </View>
  );


}

const styles = StyleSheet.create({
  container: {

  },
  button: {

  }

});
