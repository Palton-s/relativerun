import React from 'react';
import { Text, View } from 'react-native';
import {LargeButtonRounded} from './styles';
import {Card, Img} from '../components/AnalogClock/styles';

import figura from '../images/pixeltrue-time-management-1.png';

export default function Main({navigation}) {
    return (
        <View>
            <Card>
                <LargeButtonRounded><Text>Jaja</Text></LargeButtonRounded>
            </Card>
            
            <Card>
                <LargeButtonRounded onPress={()=>navigation.navigate('Timer')}><Text>Acessar Timer</Text></LargeButtonRounded>
            </Card>
            <Card>
                <LargeButtonRounded><Text>Informações</Text></LargeButtonRounded>
            </Card>
            <Card>
                <Img source={figura}/>
            </Card>
        </View>
    );
  }