import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AboutUs from './screens/AboutUs';
import PrivacyPolicy from './screens/PrivacyPolicy';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import {COLORS} from './styles/Colors';
import navigationView from './screens/NAV';
import Dashboard from './screens/Dashboard';
import Year from './screens/choose/Year';
import Settings from './screens/Settings';
import Book from './screens/choose/Book';
import Module from './screens/choose/Module';
import Subject from './screens/choose/Subject';
import Header from './components/Headers/Header';
import {useGlobalContext} from './context/DrawerContext';
import SignUp from './screens/Authorization/SignUp';
import Login from './screens/Authorization/Login';
import Onboarding from './screens/Authorization/Onboarding';
import ForgotPassword from './screens/Authorization/ForgotPassword';
import NewPassword from './screens/Authorization/NewPassword';
import PasswordReset from './screens/Authorization/PasswordReset';

const Loggedin = true;
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export function MyDrawer() {
  return (
    <NavigationContainer>
      {Loggedin ? (
        <Drawer.Navigator
          drawerContent={navigationView}
          screenOptions={{
            drawerStyle: {
              backgroundColor: COLORS.black,
              width: 250,
            },
            drawerActiveBackgroundColor: COLORS.primary,
            drawerLabelStyle: {
              color: 'white',
            },

            headerShown: false,
            drawerLabelStyle: {
              marginLeft: -10,
              color: COLORS.white,
              fontSize: 15,
            },
          }}
        >
          <Drawer.Screen
            name="Dashboard"
            options={{
              drawerLabel: 'Dashboard',
              drawerIcon: () => (
                <Entypo name="home" size={24} color={COLORS.white} />
              ),
            }}
            component={NAVIGATOR}
          />
          <Drawer.Screen
            name="MCQs"
            options={{
              drawerLabel: 'MCQs',
              drawerIcon: () => (
                <MaterialCommunityIcons
                  name="file-question-outline"
                  size={24}
                  color={COLORS.white}
                />
              ),
            }}
            component={Year}
          />
          <Drawer.Screen
            name="Settings"
            options={{
              drawerLabel: 'Profile & Settings',
              drawerIcon: () => (
                <Ionicons name="settings" size={24} color="white" />
              ),
            }}
            component={Settings}
          />
          <Drawer.Screen
            name="Privacy Policy"
            options={{
              drawerLabel: 'Privacy Policy',
              title: 'Home',
              drawerIcon: () => (
                <MaterialCommunityIcons
                  name="shield-alert"
                  size={24}
                  color={COLORS.white}
                />
              ),
            }}
            component={PrivacyPolicy}
          />

          <Drawer.Screen
            name="About"
            options={{
              drawerLabel: 'About us',
              drawerIcon: () => (
                <AntDesign name="exclamationcircle" size={24} color="white" />
              ),
            }}
            component={AboutUs}
          />
        </Drawer.Navigator>
      ) : (
        <BoardNavigator />
      )}
    </NavigationContainer>
  );
}
export default function NAVIGATOR() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen name="module" component={Module} />
      <Stack.Screen name="book" component={Book} />
      <Stack.Screen name="subject" component={Subject} />
    </Stack.Navigator>
  );
}

export function BoardNavigator() {
  const Loggedin = false;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
}
