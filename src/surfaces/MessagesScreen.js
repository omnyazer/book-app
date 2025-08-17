import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image as ExpoImage } from 'expo-image';

import { ListOfMessages } from '../components/ListOfMessages';
import { ConversationContext } from '../context';

export default function MessagesScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { conversationId } = useContext(ConversationContext);
  const { name, avatar } = route?.params ?? {};

  const safeConversationId = Number.isFinite(Number(conversationId)) ? Number(conversationId) : 1;

  return (
    <SafeAreaView style={[styles.safe, { paddingTop: insets.top + 6 }]}> 
      <View style={styles.heroWrap}>
        <View style={styles.bubbleFill} pointerEvents="none" />
        <View style={styles.bubbleLine} pointerEvents="none" />

        <View style={styles.profileRow}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatarInner}>
              {!!avatar ? (
                <ExpoImage
                  source={{ uri: avatar }}
                  style={styles.avatar}
                  contentFit="cover"
                  cachePolicy="memory-disk"
                />
              ) : (
                <View style={[styles.avatar, { alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8EEF2' }]}>
                  <Ionicons name="person" size={28} color="#000" />
                </View>
              )}
            </View>
          </View>

          <Text numberOfLines={1} style={styles.title}>{name || 'Conversation'}</Text>
        </View>
      </View>

      <View style={styles.messagesArea}>
        <ListOfMessages conversationId={safeConversationId} />
      </View>
    </SafeAreaView>
  );
}

        const styles = StyleSheet.create({
        safe: {
            flex: 1,
            backgroundColor: '#F2F4F7',
        },
        heroWrap: {
            height: 290, 
            marginHorizontal: 16,
            borderRadius: 28,
            backgroundColor: '#E6F6F4',
            overflow: 'hidden',
        },
        bubbleFill: {
            position: 'absolute',
            width: '160%',
            aspectRatio: 1,
            borderRadius: 9999,
            backgroundColor: '#EAFBF6',
            top: -140,
            left: -120,
        },
        bubbleLine: {
            position: 'absolute',
            width: '140%',
            aspectRatio: 1,
            borderRadius: 9999,
            borderWidth: 1,
            borderColor: '#DDF4F0',
            top: -20,
            left: -160,
            transform: [{ rotate: '-15deg' }],
        },
        backBtn: {
            position: 'absolute',
            left: 14,
            top: 14,
            padding: 6,
            borderRadius: 999,
            zIndex: 2,
        },
        profileRow: {
            position: 'absolute',
            top: '50%', 
            left: 0,
            right: 0,
            transform: [{ translateY: -34 }], 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 18,
            gap: 12,
        },
        avatarOuter: {
            width: 68,
            height: 68,
            borderRadius: 34,
            borderWidth: 1,
            borderColor: '#1f2937',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e8f7f3',
        },
        avatarInner: {
            width: 62,
            height: 62,
            borderRadius: 31,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        avatar: { width: 56, height: 56, borderRadius: 28 },
        title: {
            marginLeft: 12,
            fontFamily: 'Poppins_700Bold',
            fontSize: 20,
            letterSpacing: -0.3,
            color: '#000',
            maxWidth: '70%',
        },
        messagesArea: {
            flex: 1,
            marginTop: 14,
            paddingHorizontal: 0,
        },
        });