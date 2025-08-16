import React, { useMemo } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

export default function Favorites() {
  const liked = useSelector((state) => state.likedImages);

  const data = useMemo(
    () =>
      (liked || []).map((it) => ({
        id: it.id,
        image: it.image || it.url,
        user: it.user ?? null,
        time: it.time ?? null,
      })),
    [liked]
  );

  if (!data.length) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aucun favori pour le moment</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(it) => String(it.id)}
      contentContainerStyle={{ paddingVertical: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
