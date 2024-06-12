import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DefaultScrollView from '../../Components/DefaultScrollView';
import { listDailyMeals } from '../../services/getDataFromCollection'
import { useIsFocused } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '90%',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'rgba(50, 50, 50, .6)',
    borderRadius: 3,
    margin: 10,
    padding: 2
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(50, 50, 50, .6)',
  },
  title: {
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(50, 50, 50, .6)',
  }
});

function DailyMealsList() {
  const isFocused = useIsFocused();
  const [dailyMealsList, setDailyMealsList] = useState([]);

  const loadData = async () => {
    setDailyMealsList(await listDailyMeals());
  }

  useEffect(() => {
    loadData();
  }, [isFocused]);
  
  return (
    <DefaultScrollView>
      {dailyMealsList.map((meal) => {
        return (
          <View key={meal.id} style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{meal.selectedFood.name}</Text>
              <Text style={styles.title}>({meal.selectedFood.calories * meal.portion} Calorias)</Text>
            </View>
            <View style={styles.table}>
              <View>
                <Text style={styles.line}>Quantidade</Text>
                <Text style={styles.line}>Proteínas</Text>
                <Text style={styles.line}>Carboidratos</Text>
                <Text style={styles.line}>Gorduras Totais</Text>
                <Text style={styles.line}>Gorduras Saturadas</Text>
                <Text style={styles.line}>Gorduras Monoinsaturada</Text>
                <Text style={styles.line}>Gorduras Poliinsaturada</Text>
                <Text style={styles.line}>Gorduras Trans</Text>
                <Text style={styles.line}>Fibra Alimentar</Text>
                <Text>Sódio</Text>
              </View>
              <View>
                <Text style={styles.line}>{meal.portion} {meal.portionType}</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.proteins} g</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.carbos} g</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.totalFat} g</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.saturatedFat} mg</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.monounsaturatedFat} mg</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.polyunsaturatedFat} mg</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.transFat} mg</Text>
                <Text style={styles.line}>{meal.portion * meal.selectedFood.dietaryFiber} mg</Text>
                <Text>{meal.portion * meal.selectedFood.sodium} mg</Text>
              </View>
            </View>
          </View>
        );
      })}
    </DefaultScrollView>
  )
}

export default DailyMealsList