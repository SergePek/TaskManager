import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function ListItem({ elem, deleteHandler }) {

  function formatDate(milliseconds) {
    var date = new Date(milliseconds);
    console.log(milliseconds);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    m = (m < 10) ? '0' + m : m;
    d = (d < 10) ? '0' + d : d;
    return [d, m, y].join('.');
  }
  if (elem.date > Date.now()) {
    return (

      <View style={styles.view}>
        <Text style={styles.date}>{formatDate(elem.date)}</Text>
        <Text style={styles.task}>{elem.text}</Text>
      </View>

    );
  }
  return (

    <View style={styles.view}>
      <Text style={styles.date}>{formatDate(elem.date)}</Text>
      <Text style={styles.task1}>{elem.text}</Text>
    </View>

  );

}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "silver",
    width: '100%',
    padding: 10,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row'
  },
  date: {
    paddingRight: 10,
    fontSize: 18,
    width: '30%',

  },
  task: {
    
    fontSize: 18,
    width: '70%'
  },
  task1: {
    
    fontSize: 18,
    backgroundColor:'red',
    width: '70%'
  }
  
});
