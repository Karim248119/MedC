
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MedButton from '../../components/Buttons/MedButton'
import SideButton from '../../components/Buttons/SideButton'
import { COLORS } from '../../styles/Colors'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../src/Images'

const PasswordReset = () =>
{
    const navigation = useNavigation()
    return (
        <SafeAreaView
            style={ styles.container }
        >
            <Image source={ IMAGES.locker } style={ styles.img } />
            <View>
                <Text style={ styles.txt1 }>Password Reset</Text>
                <Text style={ styles.txt2 }>Your password has been successfully reset.</Text>
            </View>
            <View>
                <MedButton title={ 'BACK TO LOG IN' } />
            </View>
        </SafeAreaView>
    )
}

export default PasswordReset

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 50,
        backgroundColor: COLORS.black
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
        fontSize: 10
    }
} )