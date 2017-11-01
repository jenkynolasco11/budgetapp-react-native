import React from 'react';
import { 
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Dimensions
} from 'react-native';

import UserPassInputs from './UserPassInputs';

const {width , height} = Dimensions.get('window');

const hwidth = width > height ? height : width;

const styles = StyleSheet.create({
  login : {
    flex : 1,
    alignSelf : 'stretch',
    backgroundColor : '#cecece',
  },
  logo: {
    alignSelf : 'stretch',
    flex: 2,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs : {
    // backgroundColor : 'red',
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
    // alignSelf : 'stretch'
    width : hwidth * 0.7
  },
  button : {
    color : 'white'
  },
  highlighted : {
    color : 'cyan'
  }
});

const Login = () => {
  return (
    <View style={ styles.login }>
      <View style={ styles.logo }>
        <Text>Budget Application</Text>
      </View>
      <View style={ styles.inputs }>
        <UserPassInputs
          styles={{
            // layout : styles.inputs,
            button : styles.button,
            input : styles.input,
            highlighted : styles.highlighted
          }}
        />
      </View>
    </View>
  );
}

export default Login;