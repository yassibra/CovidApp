// Components/FilmItem.js


import React from 'react'
import { getImageFromApi, getImageFromApi2 } from '../API/TMDBApi'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        const displayDetailForPays = this.props.displayDetailForPays 
        return (
          <TouchableOpacity 
          onPress={() => displayDetailForPays(this)} style={styles.main_container}>
            <Image 
              style={styles.image}
              
              source={{uri: getImageFromApi(film.name)}}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.name}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>{film.population} habitants</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 30,
    margin: 5,
   
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 40,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})


export default FilmItem