import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../styles/Colors';
const InputCard = ( { placeholder, icon } ) =>
{
    return (
        <KeyboardAvoidingView behavior='padding' >
            <View style={ styles.container }>
                { icon && <FontAwesome name={ icon } size={ 24 } color={ COLORS.halfWhite } /> }
                <TextInput placeholder={ placeholder } placeholderTextColor={ COLORS.halfWhite } style={ styles.TextInput } />
            </View>
        </KeyboardAvoidingView>
    )
}

export default InputCard

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        padding: 10,
        backgroundColor: COLORS.transWhite,
        borderRadius: 5,
        justifyContent: 'space-around',

    },
    TextInput: {
        color: COLORS.white,
        width: "85%",
        height: 60
    }
} )