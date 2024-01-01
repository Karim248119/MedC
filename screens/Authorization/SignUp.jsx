import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import MedButton from '../../components/Buttons/MedButton'
import SideButton from '../../components/Buttons/SideButton'
import InputCard from '../../components/Cards/InputCard'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../src/Images'


const SignUp = () =>
{
    const navigation = useNavigation()

    return (
        <SafeAreaView style={ styles.mainContainer }>
            <View style={ styles.logo }>
                <Image source={ IMAGES.logo } />
            </View>
            <ScrollView contentContainerStyle={ styles.container }>
                <View style={ styles.inputsContainer }>
                    <InputCard icon={ "user" } placeholder={ 'Username' } />
                    <InputCard icon={ "envelope" } placeholder={ 'Email' } />
                    <InputCard icon={ "lock" } placeholder={ 'Password' } />
                    <InputCard icon={ "lock" } placeholder={ 'Confirm Password' } />
                    <InputCard icon={ "graduation-cap" } placeholder={ 'Academic Year' } />
                </View>
                <View style={ styles.btn }>
                    <MedButton title={ 'SIGN UP' } />
                    <SideButton text={ 'Already have an account?' } title={ 'Log in' } onPress={ () => navigation.navigate( 'Login' ) } />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp

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
} )