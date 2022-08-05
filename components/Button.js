import React from 'react'
import {TouchableHighlight, StyleSheet, View, Text} from 'react-native'

export const Button = props => {
  const {children: parentChildren, ...parentProps} = props
  return (
    <TouchableHighlight {...parentProps}>
      <View style={styles.buttonFullWidth}>
        <Text style={styles.buttonText}>{parentChildren}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {},
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonFullWidth: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
})
