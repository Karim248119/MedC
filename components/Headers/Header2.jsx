import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
const Header2 = ( { navigation } ) =>
{
    return (
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.menu } onPress={ () => navigation.toggleDrawer() }
            >
                <Feather name="menu" size={ 30 } color={ COLORS.white } />
            </TouchableOpacity>
            <View style={ styles.logo }>
                <Image source={ require( '../../assets/logo.png' ) } style={ { width: 25, height: 25 } } />
                <Text style={ styles.logoTxt }>medc</Text>
            </View>
        </View>
    )
}

export default Header2

const styles = StyleSheet.create( {
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignContent: 'center',

    },
    menu: {
        position: 'absolute',
        top: 45,
        left: 20,
    },
    logo: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginTop: 15,
        position: 'absolute',
        right: 20,
        top: 30,
    },
    logoTxt: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '700',
    },
} )