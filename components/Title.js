import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon, withBadge } from 'react-native-elements';

const Title = () => {

    const BadgedIcon = withBadge(1)(Icon);

    return (
        <View style={styles.headerContainer}>
            <Header backgroundColor={Colors.second}
                style={styles.header}
                barStyle='light-content'
                leftComponent={{ text: 'Home', style: { color: '#fff' } }}
                rightComponent={<BadgedIcon type="material" name="shopping_cart" />}
            />

        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
    },

    header: {
        flex: 1
    }
});