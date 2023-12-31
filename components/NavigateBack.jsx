import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'
import { Octicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NavigateBack = ( { onPress } ) =>
{
    return (
        <TouchableOpacity style={ styles.btn } onPress={ onPress }
        >
            <Octicons name="chevron-left" size={ 20 } color={ COLORS.white } style={ { paddingRight: 2 } } />
        </TouchableOpacity>
    )
}

export default NavigateBack

const styles = StyleSheet.create( {
    btn: {
        width: 27,
        height: 27,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor: COLORS.primary

    },
} )