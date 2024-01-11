import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View>
        <Pressable  style={styles.button}>
            <Text style={styles.text}>
            GENERATE
            </Text>
        </Pressable>
        <Pressable  style={styles.button}>
            <Text style={styles.text}>
            ⚡ COPY
            </Text>
        </Pressable>
    </View>
  );
}