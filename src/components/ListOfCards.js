import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { requestBase } from '../constants';

export default function ListOfCards() {
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${requestBase}/home.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setCardList(json?.favorites ?? []); // le json du TP a un tableau "favorites"
      } catch (e) {
        console.warn('Failed to fetch home.json:', e?.message);
        // petit fallback pour afficher qlq images
        setCardList([
          { id: 'f1', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80' },
          { id: 'f2', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80' },
        ]);
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <Image
      style={{ width: '100%', height: 288, borderRadius: 28, marginBottom: 32 }}
      source={{ uri: item.url }}
    />
  );

  if (!cardList) return null;

  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(it) => String(it.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
