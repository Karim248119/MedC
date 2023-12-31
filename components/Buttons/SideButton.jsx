import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'

const SideButton = ( { text, title, onpress } ) =>
{
    return (
        <View style={ styles.container }>
            { text && <Text style={ styles.txt }>{ text }</Text> }
            <TouchableOpacity onPress={ onpress }>
                <Text style={ styles.title }>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SideButton

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 5,
        justifyContent: 'center',
    },
    txt: {
        color: COLORS.white,
        fontSize: 10
    },
    title: {
        color: COLORS.primary,
        fontWeight: '700',
        fontSize: 10
    }
} )