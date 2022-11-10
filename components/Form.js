
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Form({addHandler}) {


    const [text, setValue] = useState('');

    const onChange = (text)=> {

        setValue(text);
    };

  return (
   <View>
    <TextInput style={styles.input} maxLength={240} clearButtonMode="always" placeholder={'Впишите событие'} onChangeText={onChange}/>
    <Button title='Добавить событие' onPress={()=> {addHandler(text); }}/>
   </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        padding:10,
        marginVertical:3,
        
    }
});
