import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'

const PageTitle = ( { title } ) =>
{
    return (
        <View style={ styles.txtContainer }>
            <Text style={ styles.txt }>{ title }</Text>
            <View style={ styles.line } />
        </View>
    )
}

export default PageTitle

const styles = StyleSheet.create( {
    txtContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    txt: {
        color: COLORS.white,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '700'
    },
    line: {
        width: 152,
        height: 2,
        backgroundColor: COLORS.primary
    },
} )