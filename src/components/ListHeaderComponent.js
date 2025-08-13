import React from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const ListHeaderComponent = () => {
  return (
    <Pressable onPress={() => console.log('pressed the add button')}>
      <View style={{ width: 96, height: 96, marginRight: 30 }}>
        <LinearGradient
          colors={['#FFE1BE', '#1E0F4A']}
          style={{
            borderRadius: 28,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name="add" size={30} color="#000000" />
        </LinearGradient>
      </View>
    </Pressable>
  );
};

export default ListHeaderComponent; 
