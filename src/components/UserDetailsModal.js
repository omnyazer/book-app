import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UserDetailsModal({ navigation, route }) {
  const p = route?.params ?? {};

  const isStory =
    !!p.story ||
    p.mode === 'story' ||
    p.showStats === false ||
    (!!p.user && !p.stats && p.showStats !== true);

  const name =
    p?.user?.name ??
    p?.user?.username ??
    p?.user?.login ??
    p?.name ??
    'User';

  const avatar =
    p?.user?.avatar ||
    p?.user?.url ||
    p?.user?.uri ||
    p?.avatar ||
    p?.url;

  const storyImage =
    p?.storyUrl ||
    p?.imageItem?.image ||
    p?.imageItem?.url ||
    p?.image ||
    p?.url;

  if (isStory) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F0FBF9' }}>
        <View
          style={{
            position: 'absolute', width: 650, height: 570, borderRadius: 155,
            borderWidth: 1, borderColor: '#E1F6F4', transform: [{ rotate: '-.45deg' }],
            top: 90, left: -360, opacity: 0.7,
          }}
        />
        <View
          style={{
            position: 'absolute', width: 650, height: 570, borderRadius: 155,
            borderWidth: 1, borderColor: '#E1F6F4', transform: [{ rotate: '-.45deg' }],
            top: 200, left: -410, opacity: 0.7,
          }}
        />

        <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row', paddingTop: 12, paddingLeft: 16 }}>
          <Ionicons name="chevron-back-outline" size={26} color="#000" />
          <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16, marginLeft: 4 }}>Go back</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginTop: 6 }}>
          <View
            style={{
              width: 56, height: 56, borderRadius: 18, borderColor: '#000', borderWidth: 1,
              overflow: 'hidden', marginRight: 12,
            }}
          >
            {avatar ? (
              <Image source={{ uri: avatar }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
            ) : (
              <View style={{ flex: 1, backgroundColor: '#E1F6F4', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="person" size={28} color="#000" />
              </View>
            )}
          </View>
          <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 18 }}>{name}</Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 14, paddingHorizontal: 16 }}>
          {storyImage ? (
            <Image
              source={{ uri: `${storyImage}?w=900&auto=format&fit=crop&q=70` }}
              style={{ width: '90%', aspectRatio: 3 / 4, borderRadius: 22 }}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{ width: '90%', aspectRatio: 3 / 4, borderRadius: 22, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text>Aucune image</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row', paddingTop: 12, paddingLeft: 16 }}>
        <Ionicons name="chevron-back-outline" size={26} color="#000" />
        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16, marginLeft: 4 }}>Go back</Text>
      </Pressable>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginTop: 6 }}>
        <View
          style={{
            width: 56, height: 56, borderRadius: 18, borderColor: '#000', borderWidth: 1,
            overflow: 'hidden', marginRight: 12,
          }}
        >
          {avatar ? (
            <Image source={{ uri: avatar }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          ) : (
            <View style={{ flex: 1, backgroundColor: '#E1F6F4', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="person" size={28} color="#000" />
            </View>
          )}
        </View>
        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 18 }}>{name}</Text>
      </View>

      <View style={{ marginTop: 12, paddingHorizontal: 16 }}>
        {storyImage ? (
          <Image
            source={{ uri: `${storyImage}?w=1200&auto=format&fit=crop&q=75` }}
            style={{ width: '100%', height: 260, borderRadius: 18 }}
            resizeMode="cover"
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}