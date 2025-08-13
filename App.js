import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Login from './src/surfaces/Login';
import Feed from './src/surfaces/Feed';
import Conversations from './src/surfaces/Conversations';
import AddPost from './src/surfaces/AddPost';
import Favorites from './src/surfaces/Favorites';
import Profile from './src/surfaces/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Conversations') iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          else if (route.name === 'AddPost') iconName = focused ? 'add-circle' : 'add-circle-outline';
          else if (route.name === 'Favorites') iconName = focused ? 'heart' : 'heart-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person-circle' : 'person-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#2A5B84',
        tabBarInactiveTintColor: '#707070',

        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: 'right',
        headerTitleStyle: {
          paddingTop: 10,
          paddingHorizontal: 40,
          textAlign: 'left',
          fontWeight: 'bold',
          
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Conversations" component={Conversations} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


export default function App() {
  const [userLoggedIn] = useState(true);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          {userLoggedIn ? (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
