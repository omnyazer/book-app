import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProfileStatistics = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.block}>
        <Text style={styles.headerText}>Posts</Text>
        <Text style={styles.stats}>35</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.headerText}>Followers</Text>
        <Text style={styles.stats}>1,552</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.headerText}>Follows</Text>
        <Text style={styles.stats}>128</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  block: { alignItems: 'center' },
  headerText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  stats: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    color: '#000',
    marginTop: 6,
  },
});
