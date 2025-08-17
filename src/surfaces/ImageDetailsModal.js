import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { likeImage, unlikeImage } from '../store/likedImages';

export default function ImageDetailsModal({ navigation, route }) {
  const imageItem = route.params?.imageItem ?? {};
  const payload = useMemo(() => ({
    id: imageItem.id ?? String(imageItem.image || imageItem.url || Math.random()),
    image: imageItem.image || imageItem.url,
    url: imageItem.image || imageItem.url, 
    user: imageItem.user ?? null,
    time: imageItem.time ?? null,
    likes: imageItem.likes ?? 128,
    conversations: imageItem.conversations ?? 12,
    followers: imageItem.followers ?? 980,
  }), [imageItem]);

  const dispatch = useDispatch();
  const isLiked = useSelector((state) =>
    state.likedImages.some((it) => String(it.id) === String(payload.id))
  );

  const toggleLike = () => {
    if (isLiked) dispatch(unlikeImage(payload.id));
    else dispatch(likeImage(payload));
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={[styles.bg, { top: -360, left: -140 }]} />
      <View style={[styles.bg, { top: -200, left: -460 }]} />

      <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
        <Ionicons name="chevron-back-outline" size={30} color="#000000" />
        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 18, marginTop: 3 }}>
          Go back
        </Text>
      </Pressable>

      {/* Image */}
      <Image
        source={{ uri: payload.image }}
        style={{ width: '100%', height: 288, marginTop: 20, borderRadius: 12 }}
        resizeMode="cover"
      />

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.headerText}>Likes</Text>
          <Text style={styles.stats}>{payload.likes}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.headerText}>Conversations</Text>
          <Text style={styles.stats}>{payload.conversations}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.headerText}>Followers</Text>
          <Text style={styles.stats}>{payload.followers}</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <Pressable onPress={toggleLike}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={40}
            color="#000000"
          />
        </Pressable>

        <Pressable onPress={() => console.log('yo! pressed bookmark 🙂')}>
          <Ionicons name="bookmark-outline" size={40} color="#000000" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: 650,
    height: 570,
    borderRadius: 155,
    borderWidth: 1,
    borderColor: '#EFEFE2',
    position: 'absolute',
    transform: [{ rotate: '-.45deg' }],
  },
  statsRow: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  stat: { alignItems: 'center' },
  headerText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  stats: {
    fontSize: 25,
    fontFamily: 'Poppins_700Bold',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
});
