import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import PaysDetail from '../Components/PaysDetail'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    PaysDetail: {
        screen: PaysDetail
    }
})

export default createAppContainer(SearchStackNavigator)