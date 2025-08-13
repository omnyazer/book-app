import React from 'react';
import { View, Image, FlatList } from 'react-native';

const ListOfCards = () => {
  const images = [
    { id: '101', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80' },
    { id: '102', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80' },
    { id: '103', url: 'https://images.unsplash.com/photo-1504198266285-165a3c78fa4e?w=900&q=80' },
    { id: '104', url: 'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?w=900&q=80' },
  ];

  const renderItem = ({ item }) => (
    <Image
      style={{ width: '100%', height: 288, borderRadius: 28, marginBottom: 32 }}
      source={{ uri: item.url }}
    />
  );

  return (
    <View style={{ paddingVertical: 30 }}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListOfCards;  
