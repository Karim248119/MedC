import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AboutUs from './screens/AboutUs';
import PrivacyPolicy from './screens/PrivacyPolicy';
import { createDrawerNavigator } from '@react-navigation/drawer';

import
{
    SimpleLineIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    Entypo,
    Ionicons,
    AntDesign
} from "@expo/vector-icons";
import { COLORS } from './styles/Colors';
import navigationView from './screens/NAV';
import Dashboard from './screens/Dashboard';
import Year from './screens/choose/Year';
import Settings from './screens/Settings';


const Drawer = createDrawerNavigator();

export function MyDrawer ()
{
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={ navigationView }
                screenOptions={ {
                    drawerStyle: {
                        backgroundColor: COLORS.black,
                        width: 250
                    },
                    drawerActiveBackgroundColor: COLORS.primary,
                    drawerLabelStyle: {
                        color: "white"
                    },

                    headerShown: false,
                    drawerLabelStyle: {
                        marginLeft: -10,
                        color: COLORS.white,
                        fontSize: 15,
                    },
                } }

            >
                <Drawer.Screen
                    name="Dashboard"
                    options={ {
                        drawerLabel: "Dashboard",
                        drawerIcon: () => (
                            <Entypo name="home" size={ 24 } color={ COLORS.white } />
                        )
                    } }
                    component={ Dashboard }
                />
                <Drawer.Screen
                    name="MCQs"
                    options={ {
                        drawerLabel: "MCQs",
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="file-question-outline" size={ 24 } color={ COLORS.white } />
                        )
                    } }
                    component={ Year }
                />
                <Drawer.Screen
                    name="Settings"
                    options={ {
                        drawerLabel: "Profile & Settings",
                        drawerIcon: () => (
                            <Ionicons name="settings" size={ 24 } color="white" />
                        )
                    } }
                    component={ Settings }
                />
                <Drawer.Screen
                    name="Privacy Policy"
                    options={ {
                        drawerLabel: "Privacy Policy",
                        title: "Home",
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="shield-alert" size={ 24 } color={ COLORS.white } />
                        )
                    } }
                    component={ PrivacyPolicy }
                />

                <Drawer.Screen
                    name="About"
                    options={ {
                        drawerLabel: "About us",
                        drawerIcon: () => (
                            <AntDesign name="exclamationcircle" size={ 24 } color="white" />
                        )
                    } }
                    component={ AboutUs }
                />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}