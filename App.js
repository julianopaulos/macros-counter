import FoodMacrosAdd from './Pages/FoodMacrosAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FoodMacrosList from './Pages/FoodMacrosList';
import DailyMacrosAdd from './Pages/DailyMacrosAdd';
import DailyMacrosList from './Pages/DailyMacrosList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='FoodMacrosAdd'>
        <Tab.Screen
          name='FoodMacrosAdd'
          component={FoodMacrosAdd}
          options={{title: 'Cadastrar alimento'}}
        />
        <Tab.Screen
          name='FoodMacrosList'
          component={FoodMacrosList}
          options={{title: 'listar alimentos'}}
        />
        <Tab.Screen
          name='DailyMacrosAdd'
          component={DailyMacrosAdd}
          options={{title: 'Cadastrar refeição'}}
        />
        <Tab.Screen
          name='DailyMacrosList'
          component={DailyMacrosList}
          options={{title: 'Listar refeições'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}