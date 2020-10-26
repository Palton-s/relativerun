import React from 'react';
import { Aro , Img, Card } from './styles';
import clock from '../../images/clock.png';

export default function Timer() {
    return (
        <Card>
        <Aro><Img source={clock}/></Aro>
        </Card>
    );
}