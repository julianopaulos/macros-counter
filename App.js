import { StyleSheet } from 'react-native';
import DefaultScrollView from './Components/DefaultScrollView';
import MacrosRegister from './Pages/FoodMacrosAdd';

export default function App() {
  return (
    <DefaultScrollView
     style={styles.container}
     body={<MacrosRegister/>}
    />
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
