import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawer } from '../../context/DrawerContext';

const Header = ( { navBack, navigation } ) =>
{
    const { openDrawer } = useDrawer();

    return (
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.menu } onPress={ () => navigation.toggleDrawer() }
            >
                <Feather name="menu" size={ 30 } color={ COLORS.white } />
            </TouchableOpacity>
            <TouchableOpacity style={ styles.back } onPress={ navBack }
            >
                <Octicons name="chevron-left" size={ 20 } color={ COLORS.white } style={ { paddingRight: 2 } } />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create( {
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: 50,
    },
    menu: {
        position: 'absolute',
        top: 45,
        left: 20,
    },
    back: {
        width: 27,
        height: 27,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute',
        right: 20,
        top: 45,
        borderWidth: 1,
        borderColor: COLORS.primary

    },
} )