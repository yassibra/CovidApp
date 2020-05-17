import React, { Fragment } from 'react'
import { getImageFromApi, getDataCorona } from '../API/TMDBApi'
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native'
const emoji = require("emoji-dictionary");
import Emojis from 'react-emoji-component'

class PaysDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pays: undefined,
            isLoading: true
        }
    }
    componentDidMount() {
        getDataCorona(this.props.navigation.state.params.alphacode.props.film.name).then(data => {
            this.setState({
                pays: data,
                isLoading: false
            })
        })
    }
    _displayTodayCases(){
      d = new Date();
      datedujour = 1;
      datedujour = d.getFullYear() + "-0" + (d.getMonth()+1) + "-" + (d.getDate()-1) + "T00:00:00Z" ;
      console.log(datedujour);
      for(i=0; i < this.state.pays.length; i++){
        if(this.state.pays[i].Date == datedujour && this.state.pays[i].Province == ""){
          return this.state.pays[i].Confirmed ;
        }
      }
    }
    _displayTodayGuerie(){
      d = new Date();
      datedujour = 1;
      datedujour = d.getFullYear() + "-0" + (d.getMonth()+1) + "-" + (d.getDate()-1) + "T00:00:00Z" ;
      console.log(datedujour);
      for(i=0; i < this.state.pays.length; i++){
        if(this.state.pays[i].Date == datedujour && this.state.pays[i].Province == ""){
          return this.state.pays[i].Recovered ;
        }
      }
    }
    _displayTodayDeaths(){
      d = new Date();
      datedujour = 1;
      datedujour = d.getFullYear() + "-0" + (d.getMonth()+1) + "-" + (d.getDate()-1) + "T00:00:00Z" ;
      console.log(datedujour);
      for(i=0; i < this.state.pays.length; i++){
        if(this.state.pays[i].Date == datedujour && this.state.pays[i].Province == ""){
          return this.state.pays[i].Deaths ;
        }
      }
    }
    _displayPays() {
        const pays =  this.state.pays
        if (pays != undefined) {
            return (
                <Fragment>
                   <Text style={styles.title_text}> {this.props.navigation.state.params.alphacode.props.film.name}</Text>
                <Image 
                    style={styles.image}
                    
                    source={{uri: getImageFromApi(this.props.navigation.state.params.alphacode.props.film.name)}}
                    resizeMode="contain"
                    resizeMethod="resize"
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                   
                    {/* <Text style={styles.vote_text}>10</Text> */}
                    </View>
                    <View style={styles.description_container}>
                    {/* <Text style={styles.description_text} > Nombre de cas à ce jour: {this.state.pays[924].Cases}</Text>     */}
                    </View>
                    <Text style={styles.description_text} > Nombre de cas à ce jour: {this._displayTodayCases()}</Text>    
                    <Text style={styles.description_text} > Nombre de cas guéris à ce jour: <Text style={styles.description_gueri} >{this._displayTodayGuerie()}</Text></Text>
                    <Text style={styles.description_text} > Nombre de morts à ce jour: <Text style={styles.description_deaths} >{this._displayTodayDeaths()}</Text></Text>  
                    <View style={styles.date_container}>
                    <Text style={styles.date_text}> {this.props.navigation.state.params.alphacode.props.film.population} habitants { emoji.getUnicode(this.props.navigation.state.params.alphacode.props.film.name.toLowerCase()) } { emoji.getUnicode(this.props.navigation.state.params.alphacode.props.film.alpha2Code.toLowerCase()) }</Text>
                    </View>
                    <Emojis symbol=""></Emojis>
                    
                </View>
                </Fragment>
            )  
        }
    }
    render() {
        console.log(this.props.navigation);
        console.log(emoji.getUnicode("fr"));
        return (
            <View style={styles.main_container}>
              
              {this._displayPays()}
              { this.state.isLoading ?
               <View style={styles.loading_container}>
                <ActivityIndicator size="large" color="#85ffdc"/>
               </View>
               : null
              }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {      
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 400
    },
    image: {
      
     
      width: 400,
      height: 260,
      
   
      
      
    },
    content_container: {
      
      
      
      
    },
    header_container: {
      
      
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    vote_text: {
      fontWeight: 'bold',
      fontSize: 10,
      color: '#666666'
    },
    description_container: {
      
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      fontSize: 18,
      alignSelf: 'center'
    },
    description_gueri: {
      fontStyle: 'italic',
      color: '#26ff00',
      fontSize: 18,
      alignSelf: 'center'
    },
    description_deaths: {
      fontStyle: 'italic',
      color: '#ff0000',
      fontSize: 18,
      alignSelf: 'center'
    },
    date_container: {
      
    },
    date_text: {
      textAlign: 'center',
      fontSize: 14
    }
  })

export default PaysDetail