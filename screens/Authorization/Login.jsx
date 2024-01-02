import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/Colors';
import MedButton from '../../components/Buttons/MedButton';
import SideButton from '../../components/Buttons/SideButton';
import InputCard from '../../components/Cards/InputCard';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../src/Images';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={IMAGES.logo} />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{alignItems: 'center', gap: 50}}
      >
        <View style={styles.inputsContainer}>
          <InputCard icon={'user'} placeholder={'Username'} />
          <View>
            <InputCard icon={'lock'} placeholder={'Password'} />
            <View style={{alignSelf: 'flex-end', marginHorizontal: 10}}>
              <SideButton
                title={'Forgot password'}
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <MedButton title={'Log in'} />
          <SideButton
            text={'Don’t have an account?'}
            title={'SIGN UP'}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
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
    flex: 1,
    marginTop: 50,
  },
  inputsContainer: {
    width: '80%',
    gap: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
