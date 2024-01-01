import { Image, SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import MedButton from '../../components/Buttons/MedButton'
import SideButton from '../../components/Buttons/SideButton'
import InputCard from '../../components/Cards/InputCard'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../src/Images'

const NewPassword = () =>
{
    const navigation = useNavigation()
    return (
        <View style={ styles.mainContainer } >
            <View style={ styles.logo }>
                <Image source={ IMAGES.logo } />
            </View>
            <ScrollView contentContainerStyle={ styles.container } style={ { flex: 1, } }>

                <View style={ { width: '80%' } }>
                    <Text style={ styles.txt1 }>Set new { '\n' }password</Text>
                </View>
                <View style={ { width: '80%' } }>
                    <Text style={ styles.txt2 }>Your new password must be different to previously { '\n' }used passwords.</Text>
                </View>
                <View style={ styles.inputsContainer }>
                    <InputCard placeholder={ 'Reset code' } />
                    <InputCard icon={ "lock" } placeholder={ 'New password' } />
                    <InputCard icon={ "lock" } placeholder={ 'Confirm new password' } />
                </View>
                <View style={ styles.btn }>
                    <MedButton title={ 'RESET PASSWORD' } />
                </View>
            </ScrollView>
        </View>
    )
}
export default NewPassword

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

        gap: 20,
        alignItems: 'center',

    },
    inputsContainer: {
        width: '80%',
        gap: 20
    },
    btn: {
        alignItems: 'center',

        justifyContent: 'center'
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
    }
} )