import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function DefaultInputText({
    onChange,
    placeholder
}) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  )
}

export default DefaultInputText