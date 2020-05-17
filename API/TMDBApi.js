// API/TMDBApi.js

const API_TOKEN = "d0aa382e5468cef00f3fc596e534bc7d";
export function getImageFromApi(name) {
    return 'https://assets.thebasetrip.com/api/v2/countries/flags/' + name.toLowerCase() +'.png'
}
export function getImageFromApi2(name) {
    return '' + name
}

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
 return fetch(url)
  .then((response) => response.json())
    .catch((error) => console.error(error))
}    

export function getDataCorona(pays) {
    const url = 'https://api.covid19api.com/country/'+ pays.toLowerCase() +'?from=2020-04-01T00:00:00Z&to=2020-05-15T00:00:00Z'
    return fetch(url)
    .then((response) => response.json()).catch((error) => console.error(error))
}
export function getCountry(txt) {
    const url ='https://restcountries.eu/rest/v2/name/' + txt
    return fetch(url)
    .then((response) => response.json()).catch((error) => console.error(error))
}
    