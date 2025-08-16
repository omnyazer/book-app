import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import ListOfAvatars from '../components/ListOfAvatars';
import ListOfCards from '../components/ListOfCards';

export default function Feed() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F5F7' }}>
      <Text style={{ fontSize: 24, fontWeight: '700', margin: 16 }}>Feed</Text>
      <View
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 16,
          marginBottom: 16,
          paddingVertical: 14,
          borderRadius: 18,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 10,
          elevation: 2,
        }}
      >
        <ListOfAvatars />
      </View>
      <ListOfCards />
    </SafeAreaView>
  );
}
