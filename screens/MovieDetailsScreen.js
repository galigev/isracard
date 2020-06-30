import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MovieDetailsScreen = props => {

    const movieDetails = props.navigation.state.params;

    console.log(movieDetails);

    return (
        <View>
            <View style={styles.screen}>
                <View>
                    <Text> { movieDetails.movieDetails.original_title } </Text>
                </View>
                <View>
                    { <Image
                        style={styles.image}
                        source={require(props.Image)}
                        /> }
                </View>
            </View>
        </View>
    );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
    screen: {

    },

    image: {

    }
});