import React, { useContext, useMemo } from 'react';
import { View, FlatList, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { UserListContext } from '../context';

const storyFor = (seed) =>
  `https://picsum.photos/seed/user-${encodeURIComponent(String(seed))}/900/1200`;

export default function ListOfAvatars() {
  const navigation = useNavigation();
  const { userList } = useContext(UserListContext) || { userList: [] };

  const data = useMemo(
    () =>
      (userList || []).map((u, i) => ({
        id: u.id ?? i + 1,
        name: u.name,
        avatar: u.url || u.avatar, 
        storyUrl: storyFor(u.id ?? i + 1),
      })),
    [userList]
  );

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate('UserDetailsModal', {
          user: { name: item.name, avatar: item.avatar },
          mode: 'story',
          image: item.storyUrl,
        })
      }
      style={{
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          borderWidth: 2,
          borderColor: '#0ea5e9', 
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 58, height: 58, borderRadius: 29 }}
        />
      </View>
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
          width: 64,
          height: 64,
          borderRadius: 32,
          marginRight: 14,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EAF3EF',
        }}
      >
        <Ionicons name="add" size={20} color="#000" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 6 }}
      />
    </View>
  );
}