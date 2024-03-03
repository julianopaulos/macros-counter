import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import DefaultInputText from '../../Components/DefaultInputText'
import DefaultButton from '../../Components/DefaultButton'

function MacrosRegister() {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Cadastro de macros por porção de 100g de alimento</Text>
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
        title='Cadastrar alimento'
        fontSize={18}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default MacrosRegister