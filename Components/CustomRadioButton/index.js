import React from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 8,
      marginRight: 1,
      borderWidth: 1,
      borderColor: 'rgba(200, 230, 240, 1)',
      minWidth: 55,
      minHeight: 40
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'rgba(110, 100, 80, 1)',
      textAlign: 'center'
    },
});

function CustomRadioButton({ text, onSelect, selected }) {
  const selectedBackgroundColor = {
    backgroundColor: selected ? 'rgba(180,180,200,.4)' : 'rgba(255,255,255,1)'
  };

  return (
    <TouchableOpacity style={{...styles.button, ...selectedBackgroundColor}} onPress={onSelect}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomRadioButton