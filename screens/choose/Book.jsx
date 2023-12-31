import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import { NAV } from '../NAV'
import NavigateBack from '../../components/NavigateBack'
import Menu from '../../components/Menu'
import Header from '../../components/Headers/Header'
import PageTitle from '../../components/PageTitle'
import ChooseButton from '../../components/Buttons/ChooseButton'

const Book = () =>
{
    return (
        <View style={ styles.container }>
            <Header />
            <PageTitle title={ "Choose your \n academic book" } />
            <ScrollView
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ styles.scroll }
            >
                <ChooseButton title={ 'BUTTON' } />
                <ChooseButton title={ 'BUTTON' } />
                <ChooseButton title={ 'BUTTON' } />
                <ChooseButton title={ 'BUTTON' } />
                <ChooseButton title={ 'BUTTON' } />
                <ChooseButton title={ 'BUTTON' } />

            </ScrollView>

        </View>
    )
}

export default Book

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: 'center',
    },
    scroll: {
        paddingVertical: 20,
        gap: 15
    }
} )