import { TextInput } from 'react-native';
import React from 'react';
import { styles } from './BatTextInputStyles';


interface BatTextInputProps {
  pass:string
};

export function BatTextInput(props : BatTextInputProps) {
  return (
    
        <TextInput
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
        />            
    );
  }

