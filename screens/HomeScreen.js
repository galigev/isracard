import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import List from '../components/List';
import {moviesApi} from '../constants/Movie';

const HomeScreen = props => {

  const [allMovies, setAllMovies] = useState([]);

  const getAllMovies = async () => {
    
    const response = await
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${moviesApi.API_KEY}&language=en-US&page=1`);

    const results = await response.json();

    setAllMovies(results.results);
  }

  const getMovieDetails = async (movieID) => {

    const response = await
      fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=fdda9e3ec85509bb96b678a343c96529&language=en-US`);

    const results = await response.json();

    console.log('----------------------------------');
    console.log(results);

    props.navigation.navigate('MovieDetails', { movieDetalis: results });
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button title="Movies" onPress={getAllMovies} />
      </View>
      <View style={styles.list}>
        <List data={allMovies} details={getMovieDetails} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  list: {
    padding: 50,
  },

  buttonContainer: {
    padding: 20,
    width: 150,
    alignSelf: 'flex-start',
  }
});