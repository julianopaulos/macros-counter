import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import DefaultInputText from '../../Components/DefaultInputText'
import DefaultButton from '../../Components/DefaultButton'
import DefaultScrollView from '../../Components/DefaultScrollView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function FoodMacrosEdit() {
  return (
    <DefaultScrollView style={styles.container}>
      <Text>Edição de macros por porção de 100g de alimento</Text>
      <DefaultInputText
        placeholder='Nome do alimento'
      />
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
        title='Editar propriedades'
        fontSize={18}
      />
      <StatusBar style="auto" />
    </DefaultScrollView>
  )
}

export default FoodMacrosEdit