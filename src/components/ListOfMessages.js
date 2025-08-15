import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import messagesData from '../data/messages.json';

export const ListOfMessages = ({ conversationId }) => {
  const convo = messagesData.find(m => m.conversationId === conversationId);
  const messages = convo ? convo.messages : [];

  const renderItem = ({ item }) => {
    const isFromMe = item.type === 'from';
    return (
      <View
        style={[
          styles.row,
          { justifyContent: isFromMe ? 'flex-end' : 'flex-start' },
        ]}
      >
        <View style={[styles.bubble, isFromMe ? styles.me : styles.them]}>
          <Text style={[styles.text, isFromMe ? styles.meText : styles.themText]}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(it) => String(it.id)}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    marginBottom: 12,
    flexDirection: 'row',
  },
  bubble: {
    maxWidth: '78%',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  me: {
    backgroundColor: '#000',
    borderTopRightRadius: 6,
  },
  them: {
    backgroundColor: '#F4FAFA',
    borderTopLeftRadius: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  meText: { color: '#FFFFFF' },
  themText: { color: '#000000' },
});
