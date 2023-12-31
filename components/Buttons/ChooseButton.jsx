import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../styles/Colors'

const ChooseButton = ( { onPress, title } ) =>
{
    const [ pressed, setPressed ] = useState( false )
    return (
        <TouchableOpacity on style={ styles.buttonContainer }
            onPressIn={ () => { setPressed( !pressed ) } }
            onPressOut={ () => { setPressed( !pressed ) } }
            onPress={ onPress } >
            <ImageBackground source={ pressed ? require( '../../assets/OrangeGradient.png' ) : null } style={ styles.imageBackground }>
                <Text style={ styles.buttonText }>{ title }</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default ChooseButton

const styles = StyleSheet.create( {
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: COLORS.gray,
    },
    imageBackground: {
        width: 328,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '17.63px 112.115px 18.37px 109.589px',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
} );