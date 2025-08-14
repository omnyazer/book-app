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
        paddingTop: headerHeight + 12,
        paddingHorizontal: 20,
        backgroundColor: '#F3F4F6', 
      }}
    >
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 22, marginBottom: 18 }}>
        Feed
      </Text>

      <ListOfAvatars />

      <ListOfCards />
    </SafeAreaView>
  );
}
