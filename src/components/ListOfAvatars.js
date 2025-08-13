import React from 'react';
import { View, FlatList, Pressable, Image } from 'react-native';
import ListHeaderComponent from './ListHeaderComponent';

const ListOfAvatars = () => {
  const data = [
    { id: '1', url: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', url: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '3', url: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '4', url: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: '5', url: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => console.log('avatar pressed', item.id)}>
      <Image
        style={{ height: 96, width: 96, borderRadius: 28, marginRight: 30 }}
        source={{ uri: item.url }}
      />
    </Pressable>
  );

  return (
    <View style={{ zIndex: 10, paddingVertical: 30, paddingRight: 20 }}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeaderComponent}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      />
    </View>
  );
};

export default ListOfAvatars;  
