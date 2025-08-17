import React, { useMemo } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

export default function Favorites({ navigation }) {
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
      <View style={[styles.container, styles.center]}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.empty}>Aucun favori pour le moment</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(it) => String(it.id)}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.title}>Favorites</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingTop: 46 },
  listContent: { paddingHorizontal: 26, paddingBottom: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, paddingHorizontal: 4 },
  center: { alignItems: 'center', justifyContent: 'center' },
  empty: { color: '#555' },
});
