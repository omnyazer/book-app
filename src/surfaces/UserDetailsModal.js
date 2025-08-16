import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UserDetailsModal({ navigation, route }) {
  const userParam = route?.params?.user ?? route?.params ?? {};
  const name = userParam?.name ?? 'User';
  const avatar =
    userParam?.avatar || userParam?.url || userParam?.uri || undefined;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <View
        style={{
          position: 'absolute',
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: '#EEF2F2',
          backgroundColor: 'transparent',
          transform: [{ rotate: '-.45deg' }],
          top: 90,
          left: -360,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: '#EEF2F2',
          backgroundColor: 'transparent',
          transform: [{ rotate: '-.45deg' }],
          top: 200,
          left: -410,
        }}
      />

      <Pressable
        onPress={() => navigation.goBack()}
        style={{ flexDirection: 'row', paddingTop: 20, marginLeft: 20 }}
      >
        <Ionicons name="chevron-back-outline" size={30} color="#000000" />
        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            fontSize: 16,
            marginLeft: 4,
          }}
        >
          Back
        </Text>
      </Pressable>

      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <View
          style={{
            width: 95,
            height: 95,
            borderRadius: 25,
            borderColor: '#000000',
            borderWidth: 1,
            overflow: 'hidden',
            transform: [{ rotate: '-.45deg' }],
          }}
        >
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={{ width: 95, height: 95 }}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{
                flex: 1,
                backgroundColor: '#E1F6F4',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="person" size={36} color="#000" />
            </View>
          )}
        </View>

        <Text
          style={{
            fontFamily: 'Poppins_700Bold',
            fontSize: 19,
            marginTop: 18,
            textAlign: 'center',
          }}
        >
          {name}
        </Text>
      </View>
    </SafeAreaView>
  );
}
