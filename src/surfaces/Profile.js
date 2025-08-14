import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileStatistics } from '../components/ProfileStatistics';
import { AddedImages } from '../components/AddedImages';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View
        style={{
          position: 'absolute',
          width: 680,
          height: 600,
          top: -340,
          left: -140,
          backgroundColor: '#E1F6F4',
          borderRadius: 180,
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 680,
          height: 600,
          top: -280,
          left: -140,
          borderRadius: 180,
          borderWidth: 1,
          borderColor: '#EEF2F2',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 680,
          height: 600,
          top: -200,
          left: -140,
          borderRadius: 180,
          borderWidth: 1,
          borderColor: '#EEF2F2',
          transform: [{ rotate: '-45deg' }],
        }}
      />

      <View style={{ paddingTop: 70, alignItems: 'center' }}>
        <View
          style={{
            width: 112,
            height: 112,
            borderRadius: 56,
            borderColor: '#1E1E1E',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderColor: '#FFFFFF',
              borderWidth: 6,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Poppins_700Bold',
            fontSize: 28,
            color: '#000',
            marginTop: 16,
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            fontSize: 16,
            color: '#4E4E4E',
            marginTop: 6,
          }}
        >
          @johndoe
        </Text>
      </View>

      <ProfileStatistics />

      <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="image-outline" color="#000000" size={30} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="bookmark-outline" color="#000000" size={30} />
        </View>
      </View>

      <AddedImages />
    </SafeAreaView>
  );
}
