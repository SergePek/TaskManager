import React, {useState} from 'react'
import Main from './components/Main';
import Tasks from './components/Tasks';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function Navigate (){


    
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: 'Начальное окно'}}
            />

            <Stack.Screen
                name="Tasks"
                component={Tasks}
                options={{title: 'События'}}
            />


        </Stack.Navigator>
    </NavigationContainer>;
}