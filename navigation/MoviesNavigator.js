import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const MoviesNavigator = createStackNavigator({
    Login: Login,
    Home: HomeScreen,
    Favorites: FavoritesScreen,
    MovieDetails: MovieDetailsScreen,
});

export default createAppContainer(MoviesNavigator);