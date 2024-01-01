import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/Colors'
import Header2 from '../components/Headers/Header2'
import PageTitle from '../components/PageTitle'
import { IMAGES } from '../src/Images'

const AboutUs = ( { navigation } ) =>
{
    return (
        <View style={ styles.container }>
            <Header2 navigation={ navigation } />
            <PageTitle title={ 'About us' } />
            <View style={ styles.txtContainer }>
                <Text style={ styles.txt }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{ '\n' }Aenean facilisis, lorem vel pulvinar cursus, ligula quam{ '\n' }finibus lorem, ut porttitor urna arcu in quam. Sed{ '\n' }malesuada molestie nunc non porttitor. Lorem ipsum { '\n' }dolor sit amet, consectetur adipiscing elit. Sed bibendum { '\n' }blandit efficitur.
                </Text>
                <Text style={ styles.txt }>
                    Sed blandit mauris quis interdum suscipit. Maecenas hendrerit justo vitae lobortis interdum. Donec pulvinar massa et arcu posuere pulvinar. Sed eu vestibulum sem, at vehicula elit.
                </Text>
            </View>

            <Image source={ IMAGES.aboutus } />
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: 'center'
    },
    txtContainer: {
        padding: 35,
        gap: 15,

    },
    txt: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '400',
        alignSelf: 'flex-start',
        textAlign: 'left',
        lineHeight: 15
    },
} )