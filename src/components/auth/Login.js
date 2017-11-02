import React from 'react'
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Dimensions
} from 'react-native'

import UserPassInputs from './UserPassInputs'
const logo = require('../../assets/images/budget.png')
const { width, height } = Dimensions.get('window')

const hwidth = width > height
              ? height
              : width

const styles = StyleSheet.create({
  login : {
    flex : 1,
    alignSelf : 'stretch',
    backgroundColor : '#cecece',
  },
  logo: {
    alignSelf : 'stretch',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs : {
    alignSelf : 'stretch',
    flex : 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom : 40,
  },
  input : {
    padding : 5,
    margin : 3,
    backgroundColor : '#eee',
    width : hwidth * 0.7,
    borderRadius : 2
  },
  button : { color : 'white' },
  highlighted : { color : 'cyan' },
  image : { width : width * 0.4 }
})

const Login = () => {
  const userinputs = {
    button : styles.button,
    input : styles.input,
    highlighted : styles.highlighted
  }

  return (
    <KeyboardAvoidingView style={ styles.login } behavior={ 'padding' }>
      <View style={ styles.logo }>
        <Image
          style={ styles.image }
          resizeMode={ 'contain' }
          source={ logo }
        />
      </View>
      <View style={ styles.inputs }>
        <UserPassInputs
          styles={ userinputs }
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login