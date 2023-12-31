import { DrawerLayoutAndroid, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { COLORS } from '../../styles/Colors'
import navigationView, { NAV } from '../NAV'
import NavigateBack from '../../components/NavigateBack'
import Menu from '../../components/Menu'
import Header from '../../components/Headers/Header'
import YearCard from '../../components/Cards/YearCard'
import PageTitle from '../../components/PageTitle'

const Year = ( { navigation } ) =>
{

    return (
        <View style={ styles.container }>
            <Header navigation={ navigation } />
            <PageTitle title={ "Choose your \n academic year" } />
            <ScrollView
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ styles.scroll }
            >
                <YearCard
                    title={ '1st Year' }
                    text={ 'The first step' }
                    background={ require( '../../assets/years/bg1.png' ) }
                    img={ require( '../../assets/years/Y1.png' ) }
                />
                <YearCard
                    title={ '2nd Year' }
                    text={ 'One step forward' }
                    background={ require( '../../assets/years/bg2.png' ) }
                    img={ require( '../../assets/years/Y2.png' ) }
                />
                <YearCard
                    title={ '3rd Year' }
                    text={ 'One step forward' }
                    background={ require( '../../assets/years/bg3.png' ) }
                    img={ require( '../../assets/years/Y3.png' ) }
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