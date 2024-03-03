import FoodMacrosAdd from './Pages/FoodMacrosAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FoodMacrosEdit from './Pages/FoodMacrosEdit';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='FoodMacrosAdd'>
        <Tab.Screen
          name='FoodMacrosAdd'
          component={FoodMacrosAdd}
          options={{title: 'Cadastro de alimentos'}}
        />
        <Tab.Screen
          name='FoodMacrosEdit'
          component={FoodMacrosEdit}
          options={{title: 'Edição de alimentos'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}