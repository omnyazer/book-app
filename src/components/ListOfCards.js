import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from './Card';

const FALLBACK = [
  { id: '1',  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
    user: { name: 'Ali Verson', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' }, time: '2h ago' },
  { id: '2',  image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    user: { name: 'Mitsu Toliner', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' }, time: '1h ago' },
  { id: '3',  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    user: { name: 'Sam Truce', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' }, time: '3h ago' },
  { id: '4',  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    user: { name: 'Eli Roa', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' }, time: '4h ago' },
  { id: '6',  image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80',
    user: { name: 'Chris', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' }, time: '6h ago' },
  { id: '7',  image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
    user: { name: 'Dana', avatar: 'https://randomuser.me/api/portraits/women/66.jpg' }, time: '7h ago' },
  { id: '8',  image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80',
    user: { name: 'Tom', avatar: 'https://randomuser.me/api/portraits/men/71.jpg' }, time: '8h ago' },
  { id: '9',  image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    user: { name: 'Ana', avatar: 'https://randomuser.me/api/portraits/women/74.jpg' }, time: '9h ago' },
  { id: '10', image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&q=80',
    user: { name: 'Leo', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' }, time: '10h ago' },
];

export default function ListOfCards({ data }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const normalised = useMemo(() => {
    const src = Array.isArray(data) && data.length ? data : FALLBACK;
    return src.map((it, i) => ({
      id: it.id ?? String(i + 1),
      image: it.image ?? it.url,
      url: it.url ?? it.image,
      user: it.user ?? null,
      time: it.time ?? null,
      likes: it.likes,
      conversations: it.conversations,
      followers: it.followers,
    }));
  }, [data]);

  return (
    <FlatList
      data={normalised}
      renderItem={({ item }) => <Card item={item} navigation={navigation} />}
      keyExtractor={(it) => String(it.id)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: insets.bottom + 170 }}
    />
  );
}
