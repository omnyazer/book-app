import React, { useContext } from 'react';
import { View, FlatList, Pressable, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { UserListContext } from '../context';

export default function ListOfAvatars() {
  const navigation = useNavigation();
  const { userList } = useContext(UserListContext) || { userList: [] };

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() =>
        navigation.navigate('UserDetailsModal', {
          user: { name: item.name, url: item.url, seed: item.id ?? index },
        })
      }
      style={{
        width: 64, height: 64, borderRadius: 32, borderWidth: 1, borderColor: '#000',
        justifyContent: 'center', alignItems: 'center', marginRight: 14, overflow: 'hidden',
      }}
    >
      <Image source={{ uri: item.url }} style={{ width: '100%', height: '100%' }} />
    </Pressable>
  );

  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 22,
        marginHorizontal: 16,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 64, height: 64, borderRadius: 32, marginRight: 14,
          alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#EAF3EF',
        }}
      >
        <Ionicons name="add" size={20} color="#000" />
      </View>

      <FlatList
        data={userList}
        keyExtractor={(it, i) => String(it?.id ?? i)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 6 }}
      />
    </View>
  );
}
