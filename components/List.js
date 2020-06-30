import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import MovieItem from './MovieItem';

const List = props => {

    return (
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={props.data}
          scrollEnabled={true}
          renderItem={itemData => (
            <MovieItem 
              style={styles.movieItem} 
              id={itemData.item.id} 
              movieName={itemData.item.title} 
              details={props.details}
            />
          )} 
        />
    );
};

export default List;

const styles = StyleSheet.create({
    movieItem: {
        padding: 10,
        marginVertical: 2,
      }
});