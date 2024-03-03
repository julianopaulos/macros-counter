import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
});

function DefaultInputText({
    onChange,
    placeholder,
    keyboardType='default'
}) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  )
}

export default DefaultInputText