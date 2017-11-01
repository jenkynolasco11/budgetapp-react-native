import React, { Component } from 'react';
import { 
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
  Keyboard,
} from 'react-native';

const styles = StyleSheet.create({
  aligned : {
    marginTop : 10,
    justifyContent : 'center',
    flexDirection : 'row'
  },
  highlight : {
    color : 'white',
  }
});

class UserPassInputs extends Component {
  constructor(props){
    super(props);

    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton(){
    Keyboard.dismiss();
  }

  render(){
    return (
      <View style={ this.props.styles.layout }>
        <TextInput
          underlineColorAndroid={"transparent"}
          style={ this.props.styles.input }
          placeholder={ "User ID or email" }
        />
        <TextInput
          underlineColorAndroid={"transparent"}
          style={ this.props.styles.input }
          secureTextEntry
          placeholder={ "Password" }
        />
        <View style={ [styles.aligned] }>
          <TouchableHighlight
            onPress={this._onPressButton }
          >
            <Text 
              style={[
                this.props.styles.highlighted, 
                this.props.styles.button
              ]}
            >
              Login
            </Text>
          </TouchableHighlight>
          <Text>{" or "}</Text>
          <TouchableHighlight
            onPress={this._onPressButton }
          >
            <Text style={[
                this.props.styles.highlighted, 
                this.props.styles.button
              ]}
            >
              Susbscribe
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


export default UserPassInputs;