import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

const FALLBACK = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
    user: {
      name: 'Ali Verson',
      avatar:
        'https://randomuser.me/api/portraits/men/11.jpg',
    },
    time: '2h ago',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    user: {
      name: 'Mitsu Toliner',
      avatar:
        'https://randomuser.me/api/portraits/women/22.jpg',
    },
    time: '1h ago',
  },
];

export default function ListOfCards({ data }) {
  const normalised = useMemo(() => {
    const src = Array.isArray(data) && data.length ? data : FALLBACK;
    return src.map((it, i) => ({
      id: it.id ?? String(i + 1),
      image: it.image ?? it.url, 
      user: it.user ?? null,
      time: it.time ?? null,
    }));
  }, [data]);

  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        data={normalised}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(it) => String(it.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
