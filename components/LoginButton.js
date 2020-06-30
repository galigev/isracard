import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { colors } from '../constants/Constants';
import {colors} from '../constants/Colors';

const LoginButton = props => {

    return (
        <Button
            containerStyle={props.style}
            titleStyle={style.titleStyle}
            buttonStyle={{...style.buttonStyle, ...props.buttonStyle}}
            title={props.title}
            icon={<Icon
                color={colors.icon}
                size={15}
                name={props.iconName}></Icon>}
            onPress={props.connect}
        />
    );

}

const style = StyleSheet.create({
    buttonStyle: {
        paddingHorizontal: 20,
        flex: 1
    },
    titleStyle: {
        marginLeft: 8,
        flexWrap: 'nowrap'
    }
});

export default LoginButton;
