import React from 'react'
// Components/Search.js

import { getFilmsFromApiWithSearchedText, getCountry } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js

import FilmItem from '../Components/FilmItem'
import { StyleSheet, View, TextInput, Button, FlatList,Text} from 'react-native'
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {films: [], searchedText: ""
    
    }

  }
  _loadFilms() {
    if(this.state.searchedText.length > 0) {   
    getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
      // console.log(data);
      // console.log(data.results);
      this.setState({films: data.results})
      
    })
  }
 }
 _loadCountry(){
   if(this.state.searchedText.length > 0) {
    getCountry(this.state.searchedText).then(data => {
    // console.log(data);
    this.setState({films: data})
    })
  }
 }
 _displayDetailForPays = (alpha2Code) => {
   this.props.navigation.navigate("PaysDetail", {alphacode: alpha2Code})
  // console.log("doit marcher");
 }
 _searchTextInputChanged(text){
   this.setState({searchedText: text})
 }
    render() {
        return(
      <View>
         <TextInput style= {[styles.textinput]} placeholder='Entrez un pays' 
         onChangeText={(text) => this._searchTextInputChanged(text)}
         onSubmitEditing={() => this._loadCountry()}
         />
    <Button  title='Rechercher' onPress={() => {this._loadCountry()}}/>
    <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForPays={this._displayDetailForPays}/>}
        />
      </View>
    
        )
    }
}
const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#00ffff',
    borderWidth: 1,
    paddingLeft: 5,
    color: 'blue'
  }
})
export default Search