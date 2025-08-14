import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

const userList = [
  {
    id: 1,
    name: 'Malena Tudi',
    url: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Jakob Curtis',
    url: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'Charlie Kelly',
    url: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Minna Amigon',
    url: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Donette Foller',
    url: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

const conversationsList = [
  { id: 1, userId: 2, text: "Hey, how's it going?" },
  { id: 2, userId: 3, text: 'Yo, are you going to the wedding?' },
  { id: 3, userId: 4, text: "seriously! i'm not even playing!" },
  { id: 4, userId: 5, text: "and then guess what happened.. he started crying...!" },
  { id: 5, userId: 1, text: 'Hi! Did you see my last message?' }, 
];


export default function ListOfConvos({ navigation }) {
  const renderItem = ({ item }) => {
    const currentUser = userList.filter((user) => user.id === item.userId);

    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Messages', {
            name: currentUser[0].name,
            avatar: currentUser[0].url,
          })
        }
        style={styles.row}
      >
        <View style={styles.avatarWrap}>
          <Image style={styles.avatar} source={{ uri: currentUser[0].url }} />
        </View>

        <View style={{ fontSize: 14, paddingBottom: 9 }}>
          <Text style={styles.name}>{currentUser[0].name}</Text>
          <Text style={styles.last} numberOfLines={2}>
            {item.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{ paddingTop: 30, marginTop: -30, marginBottom: 56 }}>
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  avatar: {
    width: 61,
    height: 61,
    borderRadius: 35,
    marginTop: 2,
    marginLeft: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  last: {
    color: '#656565',
    width: '65%',
    fontSize: 13,
    lineHeight: 18,
  },
});
