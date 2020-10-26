import React from 'react';
import {TimeNumbers , Card} from './styles';

export default function DigitalClock({time}){
    return (
        <Card>
            <TimeNumbers style={{fontSize:50,}}>00:{time}:00</TimeNumbers>
        </Card>
    );
}