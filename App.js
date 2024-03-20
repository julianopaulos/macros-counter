import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import FoodMacrosAdd from './Pages/FoodMacrosAdd';
import FoodMacrosList from './Pages/FoodMacrosList';
import DailyMacrosAdd from './Pages/DailyMacrosAdd';
import DailyMacrosList from './Pages/DailyMacrosList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='FoodMacrosAdd'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'FoodMacrosAdd') {
              console.log('route.name', route.name)
              iconName = 'fast-food'
            } else {
              iconName = 'airplane'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
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