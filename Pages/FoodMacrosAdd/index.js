import React, { useState } from 'react'
import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'
import DefaultInputText from '../../Components/DefaultInputText'
import DefaultButton from '../../Components/DefaultButton'
import DefaultScrollView from '../../Components/DefaultScrollView';
import CustomRadioButton from '../../Components/CustomRadioButton';
import { addFoodMacros } from '../../services/addOrEditCollection';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function FoodMacrosAdd() {
  const [name, setName] = useState('');
  const [portion, setPortion] = useState('0');
  const [portionType, setPortionType] = useState('g');
  const [calories, setCalories] = useState('0');
  const [proteins, setProteins] = useState('0');
  const [carbos, setCarbos] = useState('0');
  const [totalFat, setTotalFat] = useState('0');
  const [saturatedFat, setSaturatedFat] = useState('0');
  const [monounsaturatedFat, setMonounsaturatedFat] = useState('0');
  const [polyunsaturatedFat, setPolyunsaturatedFat] = useState('0');
  const [transFat, setTransFat] = useState('0');
  const [dietaryFiber, setDietaryFiber] = useState('0');
  const [sodium, setSodium] = useState('0');

  const handleSubmit = async () => {
    data = {
      name,
      portion,
      portionType,
      calories,
      proteins,
      carbos,
      totalFat,
      saturatedFat,
      monounsaturatedFat,
      polyunsaturatedFat,
      transFat,
      dietaryFiber,
      sodium,
    };

    try {
      await addFoodMacros(data);
      //display success message
      Alert.alert(`Alimento ${name} cadastrado com sucesso!`, 'Tudo certo, pode cadastrar o próximo!', [
        {
          text: 'Ok',
          style: 'default',
        },
      ]);
      setName('')
      setPortion('0')
      setPortionType('0')
      setCalories('0')
      setProteins('0')
      setCarbos('0')
      setTotalFat('0')
      setSaturatedFat('0')
      setMonounsaturatedFat('0')
      setPolyunsaturatedFat('0')
      setTransFat('0')
      setDietaryFiber('0')
      setSodium('0')
    } catch (error) {
      console.log('error', error.message);
      Alert.alert(`Erro ao cadastrar o alimento ${name}!`, 'Ops, verifique os campos e tente novamente!', [
        {
          text: 'Ok',
          style: 'default',
        },
      ]);
      //display error message
    }
  };

  return (
    <DefaultScrollView style={styles.container}>
      <Text>Cadastro de macros por porção de alimento</Text>
      <DefaultInputText
        placeholder='Nome do alimento'
        onChange={e => setName(e)}
        defaultValue={name}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200
        }}>
        <DefaultInputText
          placeholder='Porção'
          inputWitdh={100}
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
      <DefaultInputText
        placeholder='Calorias'
        keyboardType='numeric'
        onChange={e => setCalories(e)}
        defaultValue={calories}
      />
      <DefaultInputText
        placeholder='Proteínas'
        keyboardType='numeric'
        onChange={e => setProteins(e)}
        defaultValue={proteins}
      />
      <DefaultInputText
        placeholder='Carboidratos'
        keyboardType='numeric'
        onChange={e => setCarbos(e)}
        defaultValue={carbos}
      />
      <DefaultInputText
        placeholder='Gorduras totais'
        keyboardType='numeric'
        onChange={e => setTotalFat(e)}
        defaultValue={totalFat}
      />
      <DefaultInputText
        placeholder='Gordura saturada'
        keyboardType='numeric'
        onChange={e => setSaturatedFat(e)}
        defaultValue={saturatedFat}
      />
      <DefaultInputText
        placeholder='Gordura monoinsaturada'
        keyboardType='numeric'
        onChange={e => setMonounsaturatedFat(e)}
        defaultValue={monounsaturatedFat}
      />
      <DefaultInputText
        placeholder='Gordura poliinsaturada'
        keyboardType='numeric'
        onChange={e => setPolyunsaturatedFat(e)}
        defaultValue={polyunsaturatedFat}
      />
      <DefaultInputText
        placeholder='Gordura trans'
        keyboardType='numeric'
        onChange={e => setTransFat(e)}
        defaultValue={transFat}
      />
      <DefaultInputText
        placeholder='Fibra alimentar'
        keyboardType='numeric'
        onChange={e => setDietaryFiber(e)}
        defaultValue={dietaryFiber}
      />
      <DefaultInputText
        placeholder='Sódio (mg)'
        keyboardType='numeric'
        onChange={e => setSodium(e)}
        defaultValue={sodium}
      />
      <DefaultButton
        handlePress={async () => await handleSubmit()}
        title='Cadastrar alimento'
        fontSize={18}
      />
      <StatusBar style="auto" />
    </DefaultScrollView>
  )
}

export default FoodMacrosAdd