import React from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../styles/colors';
import ListOfConvos from '../components/ListOfConvos';

export default function Conversations({ navigation }) {
  const headerHeight = useHeaderHeight();
  const [query, setQuery] = React.useState('');

  const submit = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: headerHeight + 30 }]}>
      <View style={styles.bgShapeOne} />
      <View style={styles.bgShapeTwo} />
      <View style={styles.bgShapeThree} />

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={submit}
          placeholder="search contacts"
          returnKeyType="search"
        />
        <Ionicons name="search" size={24} color={colors.black} style={styles.searchIcon} />
      </View>

      <ListOfConvos navigation={navigation} searchTerm={query} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },

  bgShapeOne: {
    width: 650, height: 570, borderRadius: 155, borderWidth: 1,
    borderColor: colors.accentLines, position: 'absolute',
    top: 120, left: -160, transform: [{ rotate: '-45deg' }],
  },
  bgShapeTwo: {
    width: 650, height: 570, borderRadius: 155, borderWidth: 1,
    borderColor: colors.accentLines, position: 'absolute',
    top: 200, left: -160, transform: [{ rotate: '-45deg' }],
  },
  bgShapeThree: {
    width: 650, height: 570, borderRadius: 155, borderWidth: 1,
    borderColor: colors.accentLines, position: 'absolute',
    top: 350, left: -160, backgroundColor: '#F1F6F4',
    transform: [{ rotate: '-45deg' }],
  },

  searchWrap: { marginHorizontal: 30, position: 'relative' },
  searchInput: {
    fontSize: 14, paddingVertical: 12, paddingLeft: 40, marginHorizontal: 17,
    borderRadius: 15, backgroundColor: colors.white,
    shadowColor: '#000000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 9, elevation: 4,
  },
  searchIcon: { position: 'absolute', left: 28, top: 6 },
});
