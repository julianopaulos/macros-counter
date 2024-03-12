import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DefaultScrollView from '../../Components/DefaultScrollView';
import { listFood } from '../../services/getDataFromCollection'
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

function FoodMacrosList() {
  const isFocused = useIsFocused();
  const [foodList, setFoodList] = useState([]);

  const loadData = async () => {
    setFoodList(await listFood());
  }

  useEffect(() => {
    loadData();
  }, [isFocused]);
  
  return (
    <DefaultScrollView>
      {foodList.map((food) => {
        return (
          <View key={food.id} style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{food.name}</Text>
              <Text style={styles.title}>({food.calories} Calorias)</Text>
            </View>
            <View style={styles.table}>
              <View>
                <Text style={styles.line}>Porção ({food.portionType})</Text>
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
                <Text style={styles.line}>{food.portion} {food.portionType}</Text>
                <Text style={styles.line}>{food.proteins} g</Text>
                <Text style={styles.line}>{food.carbos} g</Text>
                <Text style={styles.line}>{food.totalFat} g</Text>
                <Text style={styles.line}>{food.saturatedFat} mg</Text>
                <Text style={styles.line}>{food.monounsaturatedFat} mg</Text>
                <Text style={styles.line}>{food.polyunsaturatedFat} mg</Text>
                <Text style={styles.line}>{food.transFat} mg</Text>
                <Text style={styles.line}>{food.dietaryFiber} mg</Text>
                <Text>{food.sodium} mg</Text>
              </View>
            </View>
          </View>
        );
      })}
    </DefaultScrollView>
  )
}

export default FoodMacrosList