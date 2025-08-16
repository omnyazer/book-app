import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { likeImage, unlikeImage } from '../store/likedImages';

export default function Card({ item }) {
  const dispatch = useDispatch();

  const id = item.id ?? String(item.url ?? item.image);
  const image = item.image ?? item.url;
  const user = item.user ?? null;
  const time = item.time ?? null;

  const liked = useSelector(state => state.likedImages.some(it => it.id === id));

  const toggleLike = () => {
    if (!image) return;
    if (liked) dispatch(unlikeImage(id));
    else dispatch(likeImage({ id, url: image, user, time }));
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ position: 'relative' }}>
        <Pressable onLongPress={toggleLike}>
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: 288, borderRadius: 28 }}
            resizeMode="cover"
          />
        </Pressable>

        {!!user && (
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
            {!!user.avatar && (
              <Image
                source={{ uri: user.avatar }}
                style={{ width: 28, height: 28, borderRadius: 14, marginRight: 8 }}
              />
            )}
            <View style={{ gap: 2 }}>
              {!!user.name && (
                <Text style={{ fontWeight: '600', color: '#000' }}>{user.name}</Text>
              )}
              {!!time && <Text style={{ fontSize: 11, color: '#666' }}>{time}</Text>}
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
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={22}
            color={liked ? '#E11D48' : '#111'}
          />
        </Pressable>
      </View>
    </View>
  );
}
