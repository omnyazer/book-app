import React, { useMemo } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import messagesData from '../data/messages.json';

export const ListOfMessages = ({ conversationId }) => {
  const messages = useMemo(() => {
    const convo = messagesData.find((m) => m.conversationId === conversationId);
    return convo ? convo.messages : [];
  }, [conversationId]);

  const renderItem = ({ item, index }) => {
    const isFromMe = item.type === 'from';
    const prev = messages[index - 1];
    const next = messages[index + 1];
    const startsGroup = !prev || prev.type !== item.type;
    const endsGroup = !next || next.type !== item.type;

    return (
      <View
        style={[
          styles.row,
          { justifyContent: isFromMe ? 'flex-end' : 'flex-start' },
          { marginTop: startsGroup ? 14 : 6 }, 
        ]}
      >
        <View
          style={[
            styles.bubble,
            isFromMe ? styles.me : styles.them,
            isFromMe
              ? {
                  borderTopRightRadius: startsGroup ? 22 : 10,
                  borderBottomRightRadius: endsGroup ? 22 : 10,
                }
              : {
                  borderTopLeftRadius: startsGroup ? 22 : 10,
                  borderBottomLeftRadius: endsGroup ? 22 : 10,
                },
          ]}
        >
          <Text style={[styles.text, isFromMe ? styles.meText : styles.themText]}>{item.text}</Text>
        </View>
      </View>
    );
  };

        return (
            <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(it) => String(it.id)}
            contentContainerStyle={{ padding: 18, paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
            />
        );
        };

        const styles = StyleSheet.create({
        row: {
            width: '100%',
            flexDirection: 'row',
        },
        bubble: {
            maxWidth: '80%',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 22,
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 3 },
            elevation: 2,
        },
        me: {
            backgroundColor: '#0B0B0B', 
        },
        them: {
            backgroundColor: '#F4FAFA',
            borderWidth: 1,
            borderColor: '#E7F1F1',
        },
        text: {
            fontSize: 14,
            lineHeight: 20,
        },
        meText: { color: '#FFFFFF' },
        themText: { color: '#111111' },
        });