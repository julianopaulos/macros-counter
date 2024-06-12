import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import FoodMacrosAdd from './Pages/FoodMacrosAdd';
import FoodMacrosList from './Pages/FoodMacrosList';
import DailyMacrosAdd from './Pages/DailyMacrosAdd';
import DailyMealsList from './Pages/DailyMealsList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='FoodMacrosAdd'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'FoodMacrosAdd':
                iconName = 'fast-food'
                break;
              case 'FoodMacrosList':
                iconName = 'list'
                break;
              case 'DailyMacrosAdd':
                iconName = 'add-circle'
              break;
              case 'DailyMealsList':
                iconName = 'list-circle'
              break;
              default:
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
          name='DailyMealsList'
          component={DailyMealsList}
          options={{title: 'Listar refeições'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}