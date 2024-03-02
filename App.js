import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComp from './Components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <ButtonComp
        onPressFunc={() => alert('cliquei')}
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
