import React, {Component} from 'react';
import { MaterialIcons , Octicons , Entypo } from '@expo/vector-icons';
import AnalogClock from '../components/AnalogClock';
import DigitalClock from '../components/DigitalClock';
import { InfoCard , Card, CardFigure, InfoText } from './styles';
import {Text, TouchableOpacity, StyleSheet, ScrollView , Modal, View} from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';


export default class Timer extends Component{

        constructor(props){
            super(props);

            this.state = {
                timer: null,
                modalVisible: false,
                number: 0,
                relativisticNumber: 0,
                startStopIcon: "av-timer",
                referencial: "parado",
                velocity: 0,
                bustedVelocity: 0,
                atualizationTime: 100,
                atualizationTimeDilated: 0,
                lightVelocity: 300000000,
                velocityMultiplicator: 200,
            }


            this.startStopButton = this.startStopButton.bind(this);
            this.clearButton = this.clearButton.bind(this);
            this.refToogle = this.refToogle.bind(this);
            this.dilactedTime = this.dilactedTime.bind(this);
            this.assyncoticVelocity = this.assyncoticVelocity.bind(this);
            this.toogleModal = this.toogleModal.bind(this);
            
        }

        componentDidMount() {
                (async () => {
                  let { status } = await Location.requestPermissionsAsync();
                  if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                  }
                  await Location.watchPositionAsync(
                    {
                      accuracy: 6,
                      timeInterval: 10,
                     },
                    (loc) => {
                        let newS = this.state;
                        newS.velocity = parseFloat((loc.coords.speed).toFixed(1));
                        this.setState(newS);
                    }
                  )
          
                })();
        }
        
        toogleModal(){
            this.setState({modalVisible: !this.state.modalVisible});
        }
        

        componentWillUnmount(){
            this.setState({velocity: 0});
        }


        dilactedTime(){
            let betta = this.state.bustedVelocity/this.state.lightVelocity;
            let bettaSquare = betta**2;
            let gamma = 1/(parseFloat(1/(1-bettaSquare)**(0.5))).toFixed(17);
            return this.state.atualizationTime*gamma; //in milliseconds
    
        }

        assyncoticVelocity(){
            let assyntoticFunction = this.state.lightVelocity*(this.state.velocity/2)/((this.state.velocity/2)+1);
            this.setState({bustedVelocity: assyntoticFunction});
        }

        startStopButton(){
            if (this.state.timer==null) {
                
                let newS = this.state;
                newS.startStopIcon = "timer";
                this.setState(newS);
                this.state.timer = setInterval(()=>{
                    this.assyncoticVelocity();
                    let newState = this.state;
                    newState.atualizationTimeDilated = this.dilactedTime();
                    newState.relativisticNumber += (this.state.atualizationTimeDilated/1000)
                    newState.number += (this.state.atualizationTime/1000);
                    this.setState(newState);

                }, this.state.atualizationTime) ;
            }else{
                clearInterval(this.state.timer);
                let newS = this.state;
                newS.timer = null;
                newS.startStopIcon = "av-timer";
                this.setState(newS);
            }
        }

        clearButton(){
            clearInterval(this.state.timer);
            let newS = this.state;
            newS.timer = null;
            newS.number = 0;
            newS.relativisticNumber = 0;
            this.setState(newS);
        }

        refToogle(){
            if(this.state.referencial=="parado"){
                let newState = this.state;
                newState.referencial = "emMovimento";
                this.setState(newState);
            }else{
                let newState = this.state;
                newState.referencial = "parado";
                this.setState(newState);
            }
        }

        render(){
            return (
                <ScrollView style={{paddingTop: Constants.statusBarHeight, paddingBottom:Constants.statusBarHeight, }}>
                    
                        <InfoCard>
                            <InfoText>
                                Referencial em movimento
                            </InfoText>
                        </InfoCard>
                        <AnalogClock time={this.state.relativisticNumber}></AnalogClock>
                        <DigitalClock time={this.state.relativisticNumber}></DigitalClock>
                        <Card>
                        <TouchableOpacity
                        onPress={this.clearButton}
                        style={styles.btnTouch}><MaterialIcons name="timer-off" size={50} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity
                        onPress={this.startStopButton}
                        style={styles.btnTouch}><MaterialIcons name={this.state.startStopIcon} size={50} color="#fff" /></TouchableOpacity>
        
                        
                    </Card>
                        <InfoCard>
                            <InfoText>
                                Referencial parado
                            </InfoText>
                        </InfoCard>
                        <AnalogClock time={this.state.number}></AnalogClock>
                        <DigitalClock time={this.state.number}></DigitalClock>
                    
                    
                    <Card>
                        <View style={styles.centeredView}>
                            <InfoCard style={{marginBottom: 40}}>
                                <InfoText>Velocidade real: {(this.state.velocity).toFixed(1)} m/s</InfoText>
                                <InfoText>Velocidade simulada: {(this.state.bustedVelocity).toFixed(1)} m/s</InfoText>
                                <InfoText>Velocidade simulada: {(this.state.bustedVelocity/this.state.lightVelocity).toFixed(5)} c</InfoText>
                                <InfoText>Percentual da dilatação temporal: {(100-this.state.atualizationTimeDilated.toFixed(2))}%</InfoText>
                            </InfoCard>
                        </View>
                    </Card>
                </ScrollView>
    
            );
        }
    }
  

  const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        scroolView:{
            flex: 1,
            marginTop: Constants.statusBarHeight,
        },
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

