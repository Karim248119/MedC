import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from './styles/Colors';

import Onboarding from './screens/Authorization/Onboarding';
import SignUp from './screens/Authorization/SignUp';
import Login from './screens/Authorization/Login';
import ForgotPassword from './screens/Authorization/ForgotPassword';
import NewPassword from './screens/Authorization/NewPassword';
import PasswordReset from './screens/Authorization/PasswordReset';
import NAVIGATOR, { MyDrawer } from './DrawerNavigator';
import Book from './screens/choose/Book';
import Module from './screens/choose/Module';
import Subject from './screens/choose/Subject';
import Year from './screens/choose/Year';
import { DrawerProvider } from './context/DrawerContext';




export default function App ()
{
  return (
    <DrawerProvider>
      <SafeAreaView style={ { flex: 1 } }>
        <StatusBar backgroundColor={ COLORS.black } barStyle={ 'light-content' } />
        <NAVIGATOR />
      </SafeAreaView>
    </DrawerProvider>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
