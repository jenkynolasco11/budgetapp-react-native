import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Login from './components/auth/Login'
import Store from './store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const store = createStore(Store)

const App = () => {
  return (
    <Provider store={ store }>
      <View style={ styles.container }>
        <StatusBar barStyle={ 'light-content' }/>
        <Login />
      </View>
    </Provider>
  )
}

export default App