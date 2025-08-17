import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ProfileStatistics } from '../components/ProfileStatistics';
import { AddedImages } from '../components/AddedImages';
import { FavoritedImages } from '../components/FavoritedImages'; 

export default function Profile() {
  const [tab, setTab] = useState('posts'); 

  const isPosts = tab === 'posts';
  const isSaved = tab === 'saved';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View
        style={{
          position: 'absolute',
          width: 680, height: 600, top: -340, left: -140,
          backgroundColor: '#E1F6F4', borderRadius: 180, transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 680, height: 600, top: -280, left: -140,
          borderRadius: 180, borderWidth: 1, borderColor: '#EEF2F2',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 680, height: 600, top: -200, left: -140,
          borderRadius: 180, borderWidth: 1, borderColor: '#EEF2F2',
          transform: [{ rotate: '-45deg' }],
        }}
      />

      <View style={{ paddingTop: 70, alignItems: 'center' }}>
        <View
          style={{
            width: 112, height: 112, borderRadius: 56,
            borderColor: '#1E1E1E', borderWidth: 2, justifyContent: 'center', alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <View
            style={{
              width: 100, height: 100, borderRadius: 50, borderColor: '#FFFFFF', borderWidth: 6,
              justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: '#FFFFFF',
            }}
          >
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </View>

        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 28, color: '#000', marginTop: 16 }}>
          John Doe
        </Text>
        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16, color: '#4E4E4E', marginTop: 6 }}>
          @johndoe
        </Text>
      </View>

      <ProfileStatistics />

      <View style={{ marginTop: 36, flexDirection: 'row', justifyContent: 'center' }}>
        <Pressable onPress={() => setTab('posts')} style={{ alignItems: 'center', marginHorizontal: 24 }}>
          <Ionicons
            name={isPosts ? 'image' : 'image-outline'}
            color={isPosts ? '#000000' : '#9CA3AF'}
            size={30}
          />
          <View
            style={{
              marginTop: 6, height: 3, width: 36, borderRadius: 2,
              backgroundColor: isPosts ? '#111' : 'transparent',
            }}
          />
        </Pressable>

        <Pressable onPress={() => setTab('saved')} style={{ alignItems: 'center', marginHorizontal: 24 }}>
          <Ionicons
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            color={isSaved ? '#000000' : '#9CA3AF'}
            size={30}
          />
          <View
            style={{
              marginTop: 6, height: 3, width: 36, borderRadius: 2,
              backgroundColor: isSaved ? '#111' : 'transparent',
            }}
          />
        </Pressable>
      </View>

      {isPosts ? <AddedImages /> : <FavoritedImages />}
    </SafeAreaView>
  );
}
