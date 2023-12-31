import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'
import { Feather } from '@expo/vector-icons';
const Menu = ( { onPress } ) =>
{
    return (
        <TouchableOpacity style={ styles.menu } onPress={ onPress }
        >
            <Feather name="menu" size={ 30 } color={ COLORS.white } />
        </TouchableOpacity>
    )
}

export default Menu

const styles = StyleSheet.create( {
    menu: {
        position: 'absolute',
        top: 45,
        right: 20,
    },
} )