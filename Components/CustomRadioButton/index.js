import React from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'rgba(200, 230, 240, 1)',
      width: 50
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 16,
      margin: 5,
      fontWeight: 'bold',
      color: 'rgba(110, 100, 80, 1)',
      textAlign: 'center'
    },
});

function CustomRadioButton({ text, onSelect, selected, width = 50, height = 40 }) {
  const customStyle = {
    backgroundColor: selected ? 'rgba(180,180,200,.4)' : 'rgba(255,255,255,1)',
    width: width,
    height: height
  };

  return (
    <TouchableOpacity style={{...styles.button, ...customStyle}} onPress={onSelect}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomRadioButton