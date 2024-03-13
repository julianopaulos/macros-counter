import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DefaultInputText from '../../Components/DefaultInputText'
import CustomRadioButton from '../../Components/CustomRadioButton'
import DefaultButton from '../../Components/DefaultButton';
import { addDailyMacros } from '../../services/addOrEditCollection';
import { Picker } from '@react-native-picker/picker';
import { listFood } from '../../services/getDataFromCollection'
import { useIsFocused } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    borderColor: 'rgba(40, 60, 80, 1)',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    margin: 12
  }
});

function DailyMacrosAdd() {
  const isFocused = useIsFocused();

  const [foodList, setFoodList] = useState([]);
  const [portion, setPortion] = useState('0');
  const [portionType, setPortionType] = useState('g');
  const [selectedFood, setSelectedFood] = useState({});

  const loadData = async () => {
    setFoodList(await listFood());
  }

  useEffect(() => {
    loadData();
  }, [isFocused]);

  const handleSubmit = async () => {
    data = {
      portion,
      portionType,
      selectedFood
    };

    try {
      // await addDailyMacros(data);
      //display success message
      // Alert.alert(`Alimento ${name} cadastrado com sucesso!`, 'Tudo certo, pode cadastrar o próximo!', [
      //   {
      //     text: 'Ok',
      //     style: 'default',
      //   },
      // ]);

      setPortion('0');
      setPortionType('g');
      setSelectedFood({});
    } catch (error) {
      console.log('error', error.message);
      Alert.alert(`Erro ao cadastrar o refeição!`, 'Ops, verifique os campos e tente novamente!', [
        {
          text: 'Ok',
          style: 'default',
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro de refeição</Text>
      <View style={styles.select}>
        <Picker
          style={{width: 300}}
          selectedValue={selectedFood}
          onValueChange={(itemValue) => setSelectedFood(itemValue)}
        >
            {foodList.map((food) => (
              <Picker.Item label={food.name} value={food} key={food.id} />
            ))}
        </Picker>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 300
        }}>
        <DefaultInputText
          placeholder='Porção'
          inputWitdh={200}
          keyboardType='numeric'
          margin={0}
          onChange={e => setPortion(e)}
          defaultValue={portion}
        />
        <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 95
        }}>
          <CustomRadioButton
            text='g'
            onSelect={() => setPortionType('g')}
            selected={portionType == 'g'}
            width={45}
          />
          <CustomRadioButton
            text='ml'
            onSelect={() => setPortionType('ml')}
            selected={portionType == 'ml'}
            width={45}
          />
        </View>
      </View>
      <DefaultButton
        handlePress={async () => await handleSubmit()}
        title='Cadastrar alimento'
        fontSize={18}
      />
    </View>
  )
}

export default DailyMacrosAdd