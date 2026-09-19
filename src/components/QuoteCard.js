import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, radius } from '../constants/theme';

export default function QuoteCard({ text, author, accent }) {
  return (
    <View style={styles.wrapper}>
      {/* Stacked cards behind the main card, for depth */}
      <View style={[styles.stackCard, styles.stackBack]} />
      <View style={[styles.stackCard, styles.stackMiddle]} />

      <View style={styles.card}>
        <View style={styles.starBadge}>
          <Text style={styles.star}>☆</Text>
        </View>

        <Text style={[styles.quoteMark, { color: accent }]}>"</Text>
        <Text style={styles.quoteText}>{text}</Text>
        <Text style={styles.authorText}>{author.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const CARD_WIDTH = '100%';

const styles = StyleSheet.create({
  wrapper: {
    width: CARD_WIDTH,
    position: 'relative',
  },
  stackCard: {
    position: 'absolute',
    left: 10,
    right: 10,
    height: '100%',
    backgroundColor: colors.cardBackground,
    borderRadius: radius.card,
  },
  stackBack: {
    top: 16,
    opacity: 0.5,
    left: 18,
    right: 18,
  },
  stackMiddle: {
    top: 8,
    opacity: 0.75,
    left: 10,
    right: 10,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: radius.card,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    minHeight: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  starBadge: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
  },
  star: {
    fontSize: 20,
    color: '#D8D8D8',
  },
  quoteMark: {
    fontSize: 48,
    fontWeight: '800',
    marginBottom: -6,
  },
  quoteText: {
    fontSize: typography.quoteSize,
    lineHeight: typography.quoteLineHeight,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  authorText: {
    marginTop: spacing.md,
    fontSize: typography.authorSize,
    color: colors.textSecondary,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
