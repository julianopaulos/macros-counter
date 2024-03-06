import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    default: {
      backgroundColor: 'rgba(120, 120, 220, 1)',
      borderRadius: 6,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(120, 120, 220, 1)',
      minWidth: 220,
      minHeight: 50,
    },
    text: {
      padding: '0',
      color: 'rgba(240, 240, 250, 1)',
      fontWeight: 'bold'
    },
});

function DefaultButton({
    handlePress,
    title,
    backgroundColor,
    fontSize,
    borderRadius
}) {
  const newStyleProps = {borderRadius: borderRadius ?? styles.default.borderRadius, backgroundColor: backgroundColor ?? styles.default.backgroundColor};

  return (
    <TouchableOpacity
      style={{...styles.button, ...newStyleProps}}
      onPress={handlePress}
    >
      <Text style={{...styles.text, fontSize: fontSize}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default DefaultButton