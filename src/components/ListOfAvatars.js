import React, { useContext } from 'react';
import { View, FlatList, Image, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { UserListContext } from '../context';

const FALLBACK_USERS = [
  { id: 1, name: 'Jakob Curtis', url: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 2, name: 'Charlie Kelly', url: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Minna Amigon', url: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { id: 4, name: 'Donette Foller', url: 'https://randomuser.me/api/portraits/men/45.jpg' },
];

export default function ListOfAvatars() {
  const { userList } = useContext(UserListContext);
  const data = userList && userList.length ? userList : FALLBACK_USERS;

  const renderAdd = () => (
    <View style={{ alignItems: 'center', marginHorizontal: 12 }}>
      <LinearGradient
        colors={['#FCE1E4', '#E1F6F4']}
        style={{ width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontSize: 24, color: '#000' }}>+</Text>
      </LinearGradient>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={{ alignItems: 'center', marginHorizontal: 12 }}>
      <Image
        source={{ uri: item.url }}
        style={{ width: 52, height: 52, borderRadius: 26 }}
      />
    </View>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      ListHeaderComponent={renderAdd}
      keyExtractor={(it) => String(it.id)}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
}
