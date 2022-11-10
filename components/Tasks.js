import React, {useState} from 'react';

import { StyleSheet, Text, View,FlatList, Button } from 'react-native';
import Header from './Header';
import ListItem from './ListItem';
import Form from './Form';

export default function Tasks() {
  const [tasks,setTasks] = useState([ 
    {
      date:1667924945290,
      text: 'Пройти собеседование на React разработчика'
    },
    {
      date:1668443399262,
      text: 'Выполнить тестовое задание'
    }
  ])

  const addHandler = (text) => {
    if(!text.trim())
    return;

    setTasks(tasks.concat([{
        text: text, date: Date.now() + 1000*3600*24*7
    }]))
  }

  const deleteHandler = (date) => {
    setTasks(tasks.filter(task => task.date !== date))
  }

  const deleteTasks = ()=> {
    setTasks([]);
  }
  
  return (
    <View style={styles.container}>
      
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={tasks} renderItem={({item})=> (
          <ListItem elem={item} deleteHandler={deleteHandler}/>
        )}/>

      </View>
      <Button style={styles.button} title='Удалить события' onPress={deleteTasks}/>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
   
  }
   
});
