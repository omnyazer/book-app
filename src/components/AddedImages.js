import React from 'react';
import { View, FlatList, Image, useWindowDimensions } from 'react-native';

const DATA = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1504198266285-165a3c78fa4e?w=1200&q=80' },
];

export const AddedImages = () => {
  const { width } = useWindowDimensions();

  const PADDING_H = 20;    
  const GUTTER = 16;       
  const ITEM_W = (width - PADDING_H * 2 - GUTTER) / 2;

  const renderItem = ({ item, index }) => (
    <View
      style={{
        width: ITEM_W,
        marginBottom: GUTTER,
        marginRight: index % 2 === 0 ? GUTTER : 0,
      }}
    >
      <Image
        source={{ uri: item.url }}
        style={{ width: '100%', height: 180, borderRadius: 20 }}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(it) => it.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: PADDING_H, paddingTop: 20, paddingBottom: 24 }}
    />
  );
};
