import React from 'react';
import { View, FlatList } from 'react-native';
import { Card } from './Card';

const DATA = [
  {
    id: 1,
    user: {
      name: 'Leota Billiard',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    time: '5 hrs ago',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200&q=80',
  },
  {
    id: 2,
    user: {
      name: 'Lenna Paprocki',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    time: '2 hrs ago',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&q=80',
  },
];

export default function ListOfFavorites() {
  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
      <FlatList
        data={[...DATA].reverse()}    
        renderItem={renderItem}
        keyExtractor={(it) => String(it.id)}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate="fast"
      />
    </View>
  );
}
