import React from 'react';
import Main from './Main';
import Timer from './Timer';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home(){
    return(
        <Timer/>
    )
}
/*
<Stack.Navigator>
            <Stack.Screen
            name="RelativeRun"
            component={Main}
            options={{
                title: 'Relative Run',
                headerStyle:{
                    backgroundColor: '#f77',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginRight: 0
                },
            }}
            />
            <Stack.Screen
            name="Timer"
            component={Timer}
            options={{
                title: 'Timer',
                headerStyle:{
                    backgroundColor: '#f77',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginRight: 50
                },
            }}
            />
        </Stack.Navigator>
*/