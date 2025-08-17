import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { likeImage, unlikeImage } from '../store/likedImages';

export default function Card({ item, navigation }) {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.likedImages.some((it) => String(it.id) === String(item.id)));

  const payload = {
    id: item.id ?? String(item.image || item.url),
    image: item.image || item.url,
    url: item.image || item.url, 
    user: item.user ?? null,
    time: item.time ?? null,
  };

  const toggleLike = () => {
    if (liked) dispatch(unlikeImage(payload.id));
    else dispatch(likeImage(payload));
  };

  const openDetails = () => {
    if (!navigation) return;
    navigation.navigate('ImageDetailsModal', { imageItem: item });
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ position: 'relative' }}>
        <Pressable onPress={openDetails}>
          <Image
            source={{ uri: payload.image }}
            style={{ width: '100%', height: 288, borderRadius: 28 }}
            resizeMode="cover"
          />
        </Pressable>

        {item.user && (
          <View
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.9)',
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          >
            <Image
              source={{ uri: item.user.avatar }}
              style={{ width: 28, height: 28, borderRadius: 14, marginRight: 8 }}
            />
            <View style={{ gap: 2 }}>
              <Text style={{ fontWeight: '600', color: '#000' }}>{item.user.name}</Text>
              {!!item.time && <Text style={{ fontSize: 11, color: '#666' }}>{item.time}</Text>}
            </View>
          </View>
        )}

        <Pressable
          onPress={toggleLike}
          hitSlop={10}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 999,
            padding: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
          }}
        >
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={22} color={liked ? '#E11D48' : '#111'} />
        </Pressable>
      </View>
    </View>
  );
}
