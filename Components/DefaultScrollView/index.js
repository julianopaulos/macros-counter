import React, { Children } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    scroll: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
    },
    container: {
      flex: 1,
    }
  });

function DefaultScrollView(props) {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default DefaultScrollView