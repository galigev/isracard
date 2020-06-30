import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginButton from '../components/LoginButton';

// import { colors, fonts } from '../constants/Constants';
import { fonts } from '../constants/Fonts';
import { colors } from '../constants/Colors';

import '../login-utils/Utils';

const Login = props => {

    return (
        <View style={styles.LoginContainer}>
            <View style={styles.userContainer}>
                <View>
                    <Text style={styles.title}>
                        {'Welcome Stranger!'}
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon
                        color={colors.second}
                        size={150}
                        name='user-circle'></Icon>
                </View>
                <View>
                    <Text style={styles.second}>
                        {'Please log in to continue to the awesomeness'}
                    </Text>
                </View>
            </View>
            <View style={styles.ButtonsContainer}>

                <LoginButton
                    style={styles.facebookButtonContainer}
                    buttonStyle={styles.facebookButton}
                    title='Login with facebook'
                    iconName='facebook'
                    connect={() => {
                        props.navigation.navigate({
                            routeName: 'Home'
                        });
                    }}
                />

                <LoginButton
                    style={styles.googleButtonContainer}
                    buttonStyle={styles.googleButton}
                    title='Or with google'
                    iconName='google'
                    connect={() => {
                        props.navigation.navigate({
                            routeName: 'Home'
                        });
                    }}
                />

            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({

    LoginContainer: {
        flex: 1
    },
    userContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: fonts.primary.size,
    },

    second: {
        fontSize: fonts.second.size,
    },

    iconContainer: {
        paddingVertical: 20,
    },

    ButtonsContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 20,
    },

    googleButtonContainer: {
        borderRadius: 10,
        height: 40,
        flex: 1,
        marginLeft: 8
    },

    facebookButtonContainer: {
        borderRadius: 10,
        height: 40
    },

    googleButton: {
        textAlign: 'center',
        backgroundColor: colors.googleBtn,
    },

    facebookButton: {
        textAlign: 'center',
        backgroundColor: colors.facebookBtn
    }
});