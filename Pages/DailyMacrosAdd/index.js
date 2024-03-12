import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DefaultInputText from '../../Components/DefaultInputText'
import CustomRadioButton from '../../Components/CustomRadioButton'
import DefaultButton from '../../Components/DefaultButton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function DailyMacrosAdd() {
  const [portion, setPortion] = useState('0');
  const [portionType, setPortionType] = useState('g');

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
      // await addFoodMacros(data);
      //display success message
      // Alert.alert(`Alimento ${name} cadastrado com sucesso!`, 'Tudo certo, pode cadastrar o próximo!', [
      //   {
      //     text: 'Ok',
      //     style: 'default',
      //   },
      // ]);

      setPortion('0')
      setPortionType('g')
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
      <DefaultButton
        handlePress={async () => await handleSubmit()}
        title='Cadastrar alimento'
        fontSize={18}
      />
    </View>
  )
}

export default DailyMacrosAdd