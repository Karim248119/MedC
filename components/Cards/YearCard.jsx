import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'

const YearCard = ( { onPress, title, text, img, background } ) =>
{
    return (
        <View style={ styles.container }>
            <View>
                <TouchableOpacity onPress={ onPress } style={ { zIndex: 20, } }>
                    <Image source={ img } style={ styles.img } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ onPress } style={ styles.buttonContainer }>
                    <ImageBackground source={ background } style={ styles.imageBackground }>
                        <Text style={ styles.topTxt }>{ text }</Text>
                        <Text style={ styles.buttonText }>{ title }</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default YearCard

const styles = StyleSheet.create( {
    container: {
        height: 180,
        width: '100%',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        borderRadius: 20,
        overflow: 'hidden'
    },
    imageBackground: {
        width: 300,
        height: 112,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'relative',
        padding: 15
    },
    img: {
        position: 'absolute',
        top: -60,
        right: -10,

        width: 189,
        height: 142,
    },
    topTxt: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: '400',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 32,
        fontWeight: '700',
    },
} );