import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Provider } from 'react-redux';

import store from './src/store';
import Login from './src/surfaces/Login';
import { Home } from './src/surfaces/Home';
import ConversationsNavigation from './src/surfaces/ConversationsNavigation';
import UserDetailsModal from './src/surfaces/UserDetailsModal'; 
import { requestBase } from './src/constants';
import { UserListContext } from './src/context';

const Stack = createStackNavigator();

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
        if (!cancelled) setUserList([]);
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
      <Provider store={store}>
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
                  <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen
                      name="UserDetailsModal"
                      component={UserDetailsModal}
                      options={{ headerShown: false }}
                    />
                  </Stack.Group>
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </UserListContext.Provider>
      </Provider>
    </SafeAreaProvider>
  );
}
