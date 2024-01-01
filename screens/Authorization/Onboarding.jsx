import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MedButton from '../../components/Buttons/MedButton'
import SideButton from '../../components/Buttons/SideButton'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../src/Images'

const Onboarding = () =>
{
    const navigation = useNavigation()
    return (
        <ImageBackground source={ IMAGES.background }
            style={ styles.container }
        >
            <Image source={ IMAGES.signup } />
            <Text style={ styles.txt1 }>All your MCQs,{ '\n' }in one place.</Text>
            <Text style={ styles.txt2 }>tis tristique. At interdum id lectus { '\n' }eu et morbi augue.</Text>
            <View>
                <MedButton title={ 'SIGN UP' } onPress={ () => navigation.navigate( 'SignUp' ) } />
                <SideButton text={ 'Already have an account?' } title={ 'Log in' } onPress={ () => navigation.navigate( 'Login' ) } />
            </View>
        </ImageBackground>
    )
}

export default Onboarding

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 50
    },
    img: {

    },
    txt1: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 32
    },
    txt2: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16
    }
} )