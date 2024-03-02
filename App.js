import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DefaultButton from './Components/DefaultButton';
import DefaultInputText from './Components/DefaultInputText';

export default function App() {
  return (
    <View style={styles.container}>
      <DefaultInputText
        placeholder='Testando input'
      />
      <DefaultInputText
        placeholder='Testando input2'
      />
      <DefaultButton
        handlePress={() => alert('cliquei')}
        title='testando'
        fontSize={20}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
