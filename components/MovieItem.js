import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import { colors } from '../constants/Constants';
import {colors} from '../constants/Colors';

const MovieItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.details.bind(null, props.id)}>
            <View style={{...styles.movieItem, ...props.style}} id={props.id}>
                <Text>{props.movieName}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieItem;

const styles = StyleSheet.create({
    movieItem: {
        backgroundColor: colors.second,
        borderColor: 'black',
        borderWidth: 1,
    }
});