import React from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

import Login from './components/auth/Login'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

export default App;