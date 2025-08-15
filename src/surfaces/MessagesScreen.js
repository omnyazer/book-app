import React, { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { ListOfMessages } from "../components/ListOfMessages";
import { ConversationContext } from "../context";

function MessagesScreen({ route }) {
  const insets = useSafeAreaInsets();
  const { conversationId } = useContext(ConversationContext);
  const { name, avatar } = route?.params ?? {};

  const safeConversationId =
    Number.isFinite(Number(conversationId)) ? Number(conversationId) : 1;

  return (
    <SafeAreaView style={[styles.safe, { paddingTop: insets.top + 16 }]}>
      <View style={styles.headerCard}>
        <View style={styles.avatarWrap}>
          {!!avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
        </View>
        <Text style={styles.title}>{name || "Conversation"}</Text>
      </View>

      <View style={styles.messagesArea}>
        <ListOfMessages conversationId={safeConversationId} />
      </View>
    </SafeAreaView>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  headerCard: {
    backgroundColor: "#E6F6F4",
    marginHorizontal: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  messagesArea: {
    flex: 1,
    marginTop: 12,
  },
});
