import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';
import QuoteCard from '../components/QuoteCard';
import useRandomQuote from '../hooks/useRandomQuote';
import { spacing, typography, radius } from '../constants/theme';

export default function QuoteScreen() {
  const { quote, theme, nextQuote } = useRandomQuote();
  const cardAnim = useRef(new Animated.Value(1)).current;

  const handleNewQuote = () => {
    // Fade + shrink the current card out
    Animated.timing(cardAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      nextQuote(); // swap quote + background color while invisible
      // Fade + grow the new card in
      Animated.spring(cardAnim, {
        toValue: 1,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }).start();
    });
  };

  const cardStyle = {
    opacity: cardAnim,
    transform: [
      {
        scale: cardAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.85, 1],
        }),
      },
      {
        translateY: cardAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <StatusBar barStyle="light-content" />

      <Text style={styles.header}>Quote of the Day</Text>

      <View style={styles.container}>
        <Animated.View style={[styles.cardAnimWrapper, cardStyle]}>
          <QuoteCard
            text={quote.text}
            author={quote.author}
            accent={theme.background}
          />
        </Animated.View>

        <TouchableOpacity
          style={[styles.button, { shadowColor: '#000' }]}
          onPress={handleNewQuote}
          activeOpacity={0.8}
        >
          <Text style={[styles.buttonText, { color: theme.background }]}>
            New Quote
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: typography.headerSize,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginTop: 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  cardAnimWrapper: {
    width: '100%',
  },
  button: {
    marginTop: spacing.xl,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: radius.button,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontSize: typography.buttonSize,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
