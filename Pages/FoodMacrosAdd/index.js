import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import DefaultInputText from '../../Components/DefaultInputText'
import DefaultButton from '../../Components/DefaultButton'
import DefaultScrollView from '../../Components/DefaultScrollView';
import CustomRadioButton from '../../Components/CustomRadioButton';

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
  const [selectedValue, setSelectedValue] = useState('g')

  return (
    <DefaultScrollView style={styles.container}>
      <Text>Cadastro de macros por porção de alimento</Text>
      <DefaultInputText
        placeholder='Nome do alimento'
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
            onSelect={() => setSelectedValue('g')}
            selected={selectedValue == 'g'}
            width={45}
          />
          <CustomRadioButton
            text='ml'
            onSelect={() => setSelectedValue('ml')}
            selected={selectedValue == 'ml'}
            width={45}
          />
        </View>
      </View>
      <DefaultInputText
        placeholder='Calorias'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Proteínas'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Carboidratos'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Gorduras totais'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Gordura saturada'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Gordura monoinsaturada'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Gordura poliinsaturada'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Gordura trans'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Fibra alimentar'
        keyboardType='numeric'
      />
      <DefaultInputText
        placeholder='Sódio'
        keyboardType='numeric'
      />
      <DefaultButton
        handlePress={() => alert('cliquei')}
        title='Cadastrar alimento'
        fontSize={18}
      />
      <StatusBar style="auto" />
    </DefaultScrollView>
  )
}

export default FoodMacrosAdd