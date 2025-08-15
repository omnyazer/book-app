import React, { useContext } from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import conversations from '../data/conversations.json';
import users from '../data/users.json';
import { ConversationContext } from '../context';

export default function ListOfConvos({ navigation }) {
  const { setConversationId } = useContext(ConversationContext);

  const onPressItem = (conv) => {
    const user = users.find(u => String(u.id) === String(conv.userId));
    setConversationId(conv.id);
    navigation.navigate('Messages', {
      name: user?.name ?? 'Conversation',
      avatar: user?.url,
    });
  };

  const renderItem = ({ item }) => {
    const user = users.find(u => String(u.id) === String(item.userId));

    return (
      <Pressable onPress={() => onPressItem(item)} style={styles.row}>
        <View style={styles.avatarWrap}>
          {!!user?.url && (
            <Image style={styles.avatar} source={{ uri: user.url }} />
          )}
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{user?.name ?? '—'}</Text>
          <Text style={styles.last} numberOfLines={2}>
            {item.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={conversations}
      keyExtractor={(it) => String(it.id)}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  row: {
    height: 103,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 33,
    marginBottom: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarWrap: {
    width: 67,
    height: 67,
    borderRadius: 35,
    borderColor: '#000000',
    borderWidth: 1,
    marginHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 61,
    height: 61,
    borderRadius: 35,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  last: {
    color: '#656565',
    width: '90%',
    fontSize: 13,
    lineHeight: 18,
  },
});
