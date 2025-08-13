import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import ListOfAvatars from '../components/ListOfAvatars'; 
import ListOfCards from '../components/ListOfCards';     

export default function Feed() {
  const headerHeight = useHeaderHeight() ?? 0; 

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: headerHeight + 20,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ marginBottom: 12 }}>this will be the feed screen</Text>

      <ListOfAvatars />
      <ListOfCards />
    </SafeAreaView>
  );
}
