import React, {Component, useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import AnalogClock from '../components/AnalogClock';
import DigitalClock from '../components/DigitalClock';
import { Card, CardFigure } from './styles';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { render } from 'react-dom';


export default class Timer extends Component{

        constructor(props){
            super(props);

            this.state = {
                timer: null,
                number: 0,
            }

            this.startStopButton = this.startStopButton.bind(this);
            this.clearButton = this.clearButton.bind(this);
        }

        startStopButton(){

        }

        clearButton(){

        }

        render(){
            return (
                <>
                <AnalogClock></AnalogClock>
                
                <DigitalClock time={"00"}></DigitalClock>
                <Card>
                    <TouchableOpacity
                    
                    style={styles.btnTouch}><MaterialIcons name="timer-off" size={50} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity
                    style={styles.btnTouch}><MaterialIcons name="timer" size={50} color="#fff" /></TouchableOpacity>
    
                    
                </Card>
    
                <CardFigure>
            <TouchableOpacity 
            style={styles.btnRefDesactived}><Text style={styles.LabelDesactived }>{"Referencial parado"}</Text></TouchableOpacity>
                </CardFigure>
                </>
    
            );
        }
    }
  

  const styles = StyleSheet.create({
        btnTouch:{
            justifyContent: 'center',
            alignItems: 'center',
            width: 70,
            height:70,
            marginHorizontal: 50,
            marginVertical: 10,
            borderRadius:35,
            backgroundColor: '#f77',
        },
        btnRefActived:{
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
            height:70,
            marginHorizontal: 50,
            marginVertical: 10,
            borderWidth: 4,
            borderColor: '#fff',
            borderRadius:35,
            backgroundColor: '#f77',
        },
        btnRefDesactived:{
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
            height:70,
            marginHorizontal: 50,
            borderWidth: 4,
            borderColor: '#f77',
            marginVertical: 10,
            borderRadius:35,
            backgroundColor: '#fff',
        },
        LabelActived:{
            color:'#fff',
            fontWeight: 'bold',
            fontSize: 16
        },
        LabelDesactived:{
            color:'#f77',
            fontWeight: 'bold',
            fontSize: 16
        }
  });

