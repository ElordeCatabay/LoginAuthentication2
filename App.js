import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";
import HomeScreen from './screens/Homescreen';
import useAuth from './hook/useAuth';
import { View } from 'react-native';
import {Profile, Latest, Settings} from './screens/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'



export {}
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff'
  }
}

export default function AppNavigation () {
  const { user } = useAuth()
  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Entypo
                      name='home'
                      size={30}
                      color={focused ? '#16247d' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='Latest'
            component={Latest}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Entypo
                      name='new'
                      size={30}
                      color={focused ? '#16247d' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <MaterialIcons
                      name='face'
                      size={30}
                      color={focused ? '#16247d' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='Settings'
            component={Settings}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <MaterialIcons
                      name='settings'
                      size={30}
                      color={focused ? '#16247d' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            options={{ headerShown: false }}
            component={Welcome}
          />
          <Stack.Screen
            name='Login'
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name='SignUp'
            options={{ headerShown: false }}
            component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
