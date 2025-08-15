import React, { useContext } from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { UserListContext } from '../context';

export default function ConversationItem({ navigation, item }) {
  const { userList } = useContext(UserListContext);
  const currentUser = userList.find(u => u.id === item.userId);

  const onPress = () => {
    navigation.navigate('Messages', {
      conversationId: item.id,         
      name: currentUser?.name,
      avatar: currentUser?.url,
    });
  };

  return (
    <Pressable onPress={onPress} style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: currentUser?.url }} style={{ width: 61, height: 61, borderRadius: 35, marginRight: 12 }} />
        <View>
          <Text style={{ fontSize: 14, fontWeight: '600' }}>{currentUser?.name}</Text>
          <Text style={{ color: '#656565', width: '65%' }}>{item.text}</Text>
        </View>
      </View>
    </Pressable>
  );
}
