import React from 'react';
import { View, FlatList, Image, useWindowDimensions } from 'react-native';

const arrayOfImages = [
  { id: 'f1', url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80' },
  { id: 'f2', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80' },
  { id: 'f3', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80' },
  { id: 'f4', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80' },
];

export const FavoritedImages = () => {
  const { width } = useWindowDimensions();
  const gutter = 16;
  const horizontalPadding = 20;
  const itemWidth = (width - horizontalPadding * 2 - gutter) / 2;

  const renderItem = ({ item, index }) => (
    <View style={{ width: itemWidth, marginBottom: 16, marginRight: index % 2 === 0 ? gutter : 0 }}>
      <Image
        source={{ uri: item.url }}
        style={{ width: '100%', height: 130, borderRadius: 20 }}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <FlatList
      data={arrayOfImages}
      renderItem={renderItem}
      keyExtractor={(it) => it.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: horizontalPadding, paddingTop: 20 }}
    />
  );
};
