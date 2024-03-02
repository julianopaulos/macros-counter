import React from 'react'
import { Button, Pressable, StyleSheet, Text, TouchableHighlight } from 'react-native'

const style = StyleSheet.create({
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

function ButtonComp({
    onPressFunc,
    title,
    backgroundColor,
    fontSize,
    borderRadius
}) {
  const newStyleProps = {borderRadius: borderRadius ?? style.default.borderRadius, backgroundColor: backgroundColor ?? style.default.backgroundColor};
  const touchProps = {
    style: ({pressed}) => pressed ? {...style.buttomHover, ...newStyleProps} : {...style.buttom, ...newStyleProps},
    onPress: onPressFunc
  }
  return (
    <Pressable {...touchProps}>
        <Text style={{...style.text, fontSize: fontSize}}>{title}</Text>
    </Pressable>
  )
}

export default ButtonComp