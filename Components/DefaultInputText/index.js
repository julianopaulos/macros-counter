import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
});

function DefaultInputText({
    defaultValue,
    onChange,
    placeholder,
    keyboardType='default',
    inputWitdh = 200,
    inputHeight = 40,
    margin = 12,
    editable = true,
}, props) {
  const customStyle = {
    width: inputWitdh,
    height: inputHeight,
    margin: margin
  };

  return (
    <TextInput
      style={{...styles.input, ...customStyle}}
      onChangeText={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      keyboardType={keyboardType}
      editable={editable}
      {...props}
    />
  )
}

export default DefaultInputText