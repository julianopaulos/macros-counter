import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    default: {
        backgroundColor: 'rgba(120, 120, 220, 1)',
        borderRadius: 6,
    },
    buttom: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(120, 120, 220, 1)',
        paddingVertical: '5px',
        paddingHorizontal: '12px',
    },
    text: {
        padding: '0',
        color: 'rgba(240, 240, 250, 1)'
    },
    buttomHover: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(120, 120, 220, 1)',
        paddingVertical: '5px',
        paddingHorizontal: '12px',
        opacity: '.7'
    }
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
    <Pressable
     style={({pressed}) => pressed ? {...styles.buttomHover, ...newStyleProps} : {...styles.buttom, ...newStyleProps}}
     onPress={handlePress}
    >
        <Text styles={{...styles.text, fontSize: fontSize}}>{title}</Text>
    </Pressable>
  )
}

export default DefaultButton