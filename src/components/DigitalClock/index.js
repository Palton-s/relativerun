import React from 'react';
import {TimeNumbers , Card} from './styles';

export default function DigitalClock({time}){

    var seconds = (Math.trunc(time).toString().length<2)?"0"+Math.trunc(time):Math.trunc(time);
    var minutes = (Math.trunc(seconds/60).toString().length<2)?"0"+Math.trunc(seconds/60):Math.trunc(seconds/60);
    var formatedSeconds = ((((seconds/60)-Math.trunc(seconds/60))*60).toFixed(0).toString().length<2)?"0"+(((seconds/60)-Math.trunc(seconds/60))*60).toFixed(0):(((seconds/60)-Math.trunc(seconds/60))*60).toFixed(0);
    var centiSeconds = (Math.trunc(((Math.trunc((100*time))-100*Math.trunc(time)))).toString().length<2)?"0"+Math.trunc(((Math.trunc((100*time))-100*Math.trunc(time)))):Math.trunc(((Math.trunc((100*time))-100*Math.trunc(time))));
    
    

    return (
        
        <Card>
            <TimeNumbers style={{fontSize:50,}}>{minutes}:{formatedSeconds}:{centiSeconds}</TimeNumbers>
        </Card>
    );
}