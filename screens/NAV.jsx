import React, { useRef, useState } from 'react';
import
{
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { COLORS } from '../styles/Colors';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { DrawerItemList } from '@react-navigation/drawer';


const navigationView = ( props ) => (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.logo }>
            <Image source={ require( '../assets/logo.png' ) } style={ { width: 25, height: 25 } } />
            <Text style={ styles.logoTxt }>medc</Text>
        </View>
        <TouchableOpacity style={ styles.menu } onPress={ () => { } }
        >
            <Feather name="x" size={ 30 } color={ COLORS.white } />
        </TouchableOpacity>
        <DrawerItemList { ...props } />
        <View style={ styles.btnContainer }>
            {/*<View style={ { width: "70%", height: 1, backgroundColor: COLORS.white, marginLeft: 15 } }></View>*/ }
            <TouchableOpacity style={ [ styles.nav, { marginLeft: -5 } ] }>
                <Entypo name="share" size={ 24 } color={ COLORS.white } />
                <Text style={ styles.txt }>Share app</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.nav }>
                <Entypo name="log-out" size={ 24 } color={ COLORS.white } />
                <Text style={ styles.txt }>Log Out</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

export default navigationView

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: COLORS.black,
        paddingTop: 120
    },
    navContainer: {
        gap: 20
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    logo: {
        position: 'absolute',
        flexDirection: 'row',
        top: 50,
        left: 20,
        gap: 5,
        alignItems: 'center',
    },
    logoTxt: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '700',
    },
    menu: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    btnContainer: {
        position: 'absolute',
        bottom: 20,
        borderTopColor: COLORS.white,
        borderWidth: 1,
        width: '100%',
        height: 130,
        justifyContent: 'center',
    },
    nav: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,

    },
    txt: {
        color: COLORS.white,
        fontSize: 15,
    }
} );