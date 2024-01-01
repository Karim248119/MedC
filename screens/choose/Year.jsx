import { DrawerLayoutAndroid, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { COLORS } from '../../styles/Colors'
import navigationView, { NAV } from '../NAV'
import NavigateBack from '../../components/NavigateBack'
import Menu from '../../components/Menu'
import Header from '../../components/Headers/Header'
import YearCard from '../../components/Cards/YearCard'
import PageTitle from '../../components/PageTitle'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../src/Images'

const Year = ( { navigation } ) =>
{
    const Navigate = useNavigation()
    return (

        <View style={ styles.container }>
            <Header navBack={ () => Navigate.goBack() } navigation={ navigation } />
            <PageTitle title={ "Choose your \n academic year" } />
            <ScrollView
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ styles.scroll }
            >
                <YearCard
                    title={ '1st Year' }
                    text={ 'The first step' }
                    background={ IMAGES.bgOrange }
                    img={ IMAGES.bookOrange }
                    onPress={ () => Navigate.navigate( { name: 'module', params: navigation, merge: true } ) }

                />
                <YearCard
                    title={ '2nd Year' }
                    text={ 'One step forward' }
                    background={ IMAGES.bgBlue }
                    img={ IMAGES.bookBlue }
                />
                <YearCard
                    title={ '3rd Year' }
                    text={ 'One step forward' }
                    background={ IMAGES.bgGreen }
                    img={ IMAGES.bookGreen }
                />
            </ScrollView>
        </View>

    )
}

export default Year

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: 'center',
    },
    scroll: {
        paddingVertical: 20,
    }
} )