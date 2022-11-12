
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTasks } from '../store/reduser';

export default function Form({ addHandler }) {

    const dispatch = useDispatch();

    function useInputValue() {
        const [value, setValue] = useState('');
        return {
            bind: {
                value,
                onChangeText: (text) => {
                    setValue(text)
                }
            },
            clear: () => setValue(''),
            value: () => value
        }
    }

    const input = useInputValue()
    
    return (
        <View>
            <TextInput style={styles.input} {...input.bind} maxLength={240} clearButtonMode="always" placeholder={'Впишите событие'} />
            <Button title='Добавить событие' onPress={() => {  dispatch(addTask(input.value())); input.clear(); }} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 3,

    }
});
