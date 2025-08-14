// src/components/ListHeaderComponent.js
import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ListHeaderComponent() {
  return (
    <View
      style={{
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 22,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={['#FFE1BE', '#D7EDEA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Ionicons name="add" size={24} color="#000" />
      </LinearGradient>
    </View>
  );
}
