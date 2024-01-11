import { TextInput } from 'react-native';
import React from 'react';
import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
    
        <TextInput
            style={styles.inputer}
            placeholder='pass'
            multiline={true}
        />            
    );
  }

