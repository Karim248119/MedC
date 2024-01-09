import {
  DrawerLayoutAndroid,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import MedButton from '../components/Buttons/MedButton';
import SideButton from '../components/Buttons/SideButton';
import {COLORS} from '../styles/Colors';
import {Feather} from '@expo/vector-icons';
import Menu from '../components/Menu';
import navigationView from './NAV';
import Header2 from '../components/Headers/Header2';
import {IMAGES} from '../src/Images';
import {useNavigation} from '@react-navigation/native';

const Dashboard = ({navigation}) => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header2 navigation={navigation} />
      <View style={styles.content}>
        <Image source={IMAGES.user} style={styles.img} />
        <Text style={styles.txt1}>Hi, Eyad.</Text>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigator.navigate('mcq');
            }}
          >
            <Text style={styles.buttonText}>Go to MCQs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: COLORS.black,
    position: 'relative',
  },
  content: {
    height: '80%',
    justifyContent: 'space-evenly',
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
  txt1: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
  },
  txt2: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  buttonContainer: {
    borderRadius: 5,
    backgroundColor: COLORS.transWhite,
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
