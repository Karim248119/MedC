import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MedButton = ( { onPress, title } ) =>
{
    return (
        <TouchableOpacity onPress={ onPress } style={ styles.buttonContainer }>
            <ImageBackground source={ require( '../../assets/OrangeGradient.png' ) } style={ styles.imageBackground }>
                <Text style={ styles.buttonText }>{ title }</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default MedButton

const styles = StyleSheet.create( {
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
    },
    imageBackground: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
} );