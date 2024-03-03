import React from 'react'
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

function DefaultScrollView({body}) {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {body}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default DefaultScrollView