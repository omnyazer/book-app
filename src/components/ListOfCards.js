import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

export default function ListOfCards() {
  const cardList = [
    { id: 'f1', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80' },
    { id: 'f2', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80' },
    { id: 'f3', url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=900&q=80' },
  ];

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.url }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(it) => String(it.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 10, paddingHorizontal: 20 },
  image: {
    width: '100%',
    height: 288,
    borderRadius: 28,
    marginBottom: 32,
  },
});
