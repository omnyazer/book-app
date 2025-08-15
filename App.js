import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Login from './src/surfaces/Login';
import { Home } from './src/surfaces/Home';
import ConversationsNavigation from './src/surfaces/ConversationsNavigation';
import { requestBase } from './src/constants';   
import { UserListContext } from './src/context';

const Stack = createStackNavigator();

const FALLBACK_USERS = [
  { id: 1, name: 'Jakob Curtis', url: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 2, name: 'Charlie Kelly', url: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Minna Amigon', url: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { id: 4, name: 'Donette Foller', url: 'https://randomuser.me/api/portraits/men/45.jpg' },
];

export default function App() {
  const [userLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchUserData() {
      try {
        const res = await fetch(`${requestBase}/users.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) setUserList(json);
      } catch (e) {
        console.warn('Failed to fetch users.json:', e?.message || e);
        if (!cancelled) setUserList(FALLBACK_USERS);
      }
    }

    fetchUserData();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!fontsLoaded || userList === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading…</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <UserListContext.Provider value={{ userList }}>
        <NavigationContainer>
          <Stack.Navigator>
            {!userLoggedIn ? (
              <Stack.Screen name="Login" component={Login} />
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ConversationsNav"
                  component={ConversationsNavigation}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserListContext.Provider>
    </SafeAreaProvider>
  );
}
