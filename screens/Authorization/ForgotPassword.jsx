import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import MedButton from '../../components/Buttons/MedButton'
import SideButton from '../../components/Buttons/SideButton'
import InputCard from '../../components/Cards/InputCard'

const ForgotPassword = () =>
{
    return (
        <View style={ styles.mainContainer }  >
            <View style={ styles.logo }>
                <Image source={ require( '../../assets/logo.png' ) } />
            </View>
            <ScrollView contentContainerStyle={ styles.container } style={ { flex: 1 } }>

                <View style={ { width: '80%' } }>
                    <Text style={ styles.txt1 }>Set new { '\n' }password</Text>
                </View>
                <View style={ { width: '80%' } }>
                    <Text style={ styles.txt2 }>Your new password must be different to previously { '\n' }used passwords.</Text>
                </View>

                <View style={ styles.inputsContainer }>
                    <InputCard icon={ "envelope" } placeholder={ 'Email' } />
                </View>
                <View style={ styles.btn }>
                    <TouchableOpacity style={ styles.buttonContainer }>
                        <Text style={ styles.buttonText }>SEND CODE</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}
export default ForgotPassword

const styles = StyleSheet.create( {
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,

    },
    container: {
        gap: 50,
        alignItems: 'center',
    },
    inputsContainer: {
        width: '80%',
        gap: 20
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        paddingVertical: 50
    },
    txt1: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32,
        alignSelf: 'flex-start',
        textAlign: 'left'
    },
    txt2: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        alignSelf: 'flex-start',
        textAlign: 'left'
    },
    buttonContainer: {
        borderRadius: 5,
        backgroundColor: COLORS.transWhite,
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
} )