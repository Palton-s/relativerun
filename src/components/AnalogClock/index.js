import React, { useState , useEffect } from 'react';
import { Aro , Img, Card, SecondPointer } from './styles';
import clock from '../../images/clock.png';
import { StyleSheet } from 'react-native';
import secondsPointer from '../../images/seconds.png';
import minutesPointer from '../../images/minutes.png';
import centerPointer from '../../images/center.png';


export default function Timer({time}) {

    var seconds = (Math.trunc(time).toString().length<2)?"0"+Math.trunc(time):Math.trunc(time);
    var minutes = (Math.trunc(seconds/60).toString().length<2)?"0"+Math.trunc(seconds/60):Math.trunc(seconds/60);
    var formatedSeconds = ((((seconds/60)-Math.trunc(seconds/60))*60).toFixed(0).toString().length<2)?"0"+(((seconds/60)-Math.trunc(seconds/60))*60).toFixed(0):(((seconds/60)-Math.trunc(seconds/60))*60).toFixed(0);
    var centiSeconds = (Math.trunc(((Math.trunc((100*time))-100*Math.trunc(time)))).toString().length<2)?"0"+Math.trunc(((Math.trunc((100*time))-100*Math.trunc(time)))):Math.trunc(((Math.trunc((100*time))-100*Math.trunc(time))));
    return (
        <Card>
        <Img source={clock}/>
        <SecondPointer><Img style={{transform: [{ rotate: 6*(minutes)+'deg' }]}} source={minutesPointer}/></SecondPointer>
        <SecondPointer><Img source={centerPointer}/></SecondPointer>
        <SecondPointer><Img style={{transform: [{ rotate: 6*seconds+'deg' }]}} source={secondsPointer}/></SecondPointer>
        </Card>
    );

    

}