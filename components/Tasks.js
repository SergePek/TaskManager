
import { StyleSheet, View, FlatList, Button, ScrollView } from 'react-native';
import ListItem from './ListItem';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTasks } from '../store/reduser';

export default function Tasks() {

  const dispatch = useDispatch();

  const taskss = useSelector(state => state.task.tasks);

  //console.log('Tasks : ' + taskss.length);

  return (
    <View style={{flex:1}}>

      <Form style={{flex:1}}/>
      <ScrollView style={{flex:1}}>
        <FlatList style={{flex:1}}
          data={taskss}
          renderItem={({ item }) => (
            <ListItem elem={item} />
          )}

          keyExtractor={(item) => item.date}
        />
      </ScrollView>


      {taskss.length > 0 && <Button style={{flex:1}} title='Удалить события' onPress={() => { dispatch(deleteTasks()) }} />}
    </View>

  );


}

const styles = StyleSheet.create({
  container: {


  }

});
