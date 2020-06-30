import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {

    return (
        <View style={{flex: 1, width: '100%'}}>
            <Text>Favorites Screen!</Text>
            {/* <View style={styles.header}>
                <Title />
            </View>
            <View style={styles.list}>
                <List data={props.movies} />
            </View> */}
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
    list: {
        padding: 50,
      }
});