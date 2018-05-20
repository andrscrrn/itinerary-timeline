import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview'
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Overview</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
