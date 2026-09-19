import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../constants/theme';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
      source={require('../assets/images/bg.png')}
      style={styles.background}
      />
      {/* <Text style={styles.mark}>"</Text> */}
      
        <Image
        source={require('../assets/icons/logo.png')}
        style={styles.image}
      />
      <Text style={styles.appName}>Wisp</Text>
      <Text style={styles.tagline}>quotes worth pausing for...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mark: {
    fontSize: 60,
    color: colors.accent,
    fontWeight: '700',
    marginBottom: -20,
  },
  appName: {
    fontSize: 36,
    fontWeight: '700',
        color: '#7B61FF',


  },
  tagline: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textprimary,
    fontStyle: 'italic',
  },
  image: {
    width: 100,
    height: 50,
    // backgroundColor: 'red',
    tintColor: '#7B61FF',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
