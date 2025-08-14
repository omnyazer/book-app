import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Feed from './Feed';
import Profile from './Profile';
import Favorites from './Favorites';
import AddPost from './AddPost';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();
const ConversationsBase = () => <View style={{ flex: 1 }} />;

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ellipse';

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accentStroke,
        tabBarInactiveTintColor: colors.black,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />

      <Tab.Screen
        name="ConversationsMain"
        component={ConversationsBase}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbox-outline" size={size} color={color ?? colors.black} />
          ),
          title: 'Conversations',
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('ConversationsNav');
          },
        })}
      />

      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ size }) => (
            <View
              style={{
                marginTop: -30,
                width: size + 26,
                height: size + 26,
                borderRadius: (size + 26) / 2,
                backgroundColor: colors.black,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="add" size={22} color="#FFFFFF" />
            </View>
          ),
          title: 'AddPost',
        }}
      />

      <Tab.Screen name="Favorites" component={Favorites} />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
