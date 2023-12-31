import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header2 from '../components/Headers/Header2'
import { COLORS } from '../styles/Colors'

const Settings = ( { navigation } ) =>
{
    return (
        <View style={ styles.container }>
            <Header2 navigation={ navigation } />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    }
} )