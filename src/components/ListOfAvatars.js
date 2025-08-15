import React from 'react';
import { View, FlatList, Pressable, Image } from 'react-native';
import { UserListContext } from '../context';
import ListHeaderComponent from './ListHeaderComponent';

const FALLBACK = [
  { id: 1, name: 'Jakob Curtis', url: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 2, name: 'Charlie Kelly', url: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Minna Amigon', url: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { id: 4, name: 'Donette Foller', url: 'https://randomuser.me/api/portraits/men/45.jpg' },
];

export default function ListOfAvatars() {
  const { userList } = React.useContext(UserListContext);

  const data =
    Array.isArray(userList) && userList.length > 0
      ? userList.slice(0, 6) 
      : FALLBACK;

  const renderItem = ({ item }) => (
    <Pressable onPress={() => console.log('avatar pressed:', item.name)}>
      <Image
        source={{ uri: item.url }}
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          marginRight: 22,
          borderWidth: 2,
          borderColor: 'rgba(0,0,0,0.06)',
        }}
      />
    </Pressable>
  );

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{ alignItems: 'center' }}
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </View>
  );
}
