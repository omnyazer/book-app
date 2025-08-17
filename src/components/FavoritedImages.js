import React from 'react';
import { View, FlatList, Image, Text, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoritedImages = () => {
  const saved = useSelector((state) => state.savedImages); 
  const { width } = useWindowDimensions();

  const gutter = 16;
  const horizontalPadding = 20;
  const itemWidth = (width - horizontalPadding * 2 - gutter) / 2;

  if (!saved || saved.length === 0) {
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 24 }}>
        <Text style={{ color: '#6B7280' }}>Aucun élément enregistré.</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    const uri = item.image || item.url;
    return (
      <View style={{ width: itemWidth, marginBottom: 16, marginRight: index % 2 === 0 ? gutter : 0 }}>
        <Image
          source={{ uri }}
          style={{ width: '100%', height: 130, borderRadius: 20 }}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <FlatList
      data={saved}
      renderItem={renderItem}
      keyExtractor={(it) => String(it.id)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: horizontalPadding, paddingTop: 20, paddingBottom: 24 }}
    />
  );
};
