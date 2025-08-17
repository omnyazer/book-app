import React, { useMemo } from 'react';
import { View, FlatList, Image, Text, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const IMAGES_SETS = [
  [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
    'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200',
  ],
  [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200',
  ],
  [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200',
  ],
];

export default function UserDetailsModal({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const user = route?.params?.user ?? { name: 'User', url: undefined, seed: 0 };

  const seed = Number(user?.seed ?? 0);
  const images = useMemo(
    () => IMAGES_SETS[seed % IMAGES_SETS.length],
    [seed]
  );

  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item }}
      style={{
        width: '85%',
        height: 420,
        alignSelf: 'center',
        borderRadius: 22,
        marginVertical: 14,
      }}
      resizeMode="cover"
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F8F9', paddingTop: insets.top + 4 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginBottom: 8 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}
          hitSlop={8}
        >
          <Ionicons name="chevron-back-outline" size={28} color="#000" />
          <Text style={{ fontSize: 14, marginLeft: 2 }}>Go back</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
          <View
            style={{
              width: 44, height: 44, borderRadius: 22, overflow: 'hidden',
              borderWidth: 1, borderColor: '#000', marginRight: 10,
            }}
          >
            {!!user?.url && (
              <Image source={{ uri: user.url }} style={{ width: '100%', height: '100%' }} />
            )}
          </View>
          <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 18 }}>{user?.name ?? 'User'}</Text>
        </View>
      </View>

      <FlatList
        data={images}
        keyExtractor={(uri, i) => `${i}-${uri}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 26 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
