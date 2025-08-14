import React from 'react';
import { View, Image, Text } from 'react-native';

export const Card = ({ item }) => {
  const src = item.image;

  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: src }}
          style={{ width: '100%', height: 288, borderRadius: 28 }}
          resizeMode="cover"
        />

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
              <Text style={{ fontSize: 11, color: '#666' }}>{item.time}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
