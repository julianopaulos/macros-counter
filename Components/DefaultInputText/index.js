import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
});

function DefaultInputText({
    onChange,
    placeholder,
    keyboardType='default',
    inputWitdh = 200,
    inputHeight = 40
}) {
  return (
    <TextInput
      style={{...styles.input, width: inputWitdh, height: inputHeight}}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  )
}

export default DefaultInputText