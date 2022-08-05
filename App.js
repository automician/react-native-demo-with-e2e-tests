import React from 'react'
import {StyleSheet, StatusBar, View} from 'react-native'
import {App as WelcomeApp} from './sub-apps/welcome-to-rn/App'
import {App as StockPriceApp} from './sub-apps/stock-price-app/App'
import {Button} from './components/Button'

export const App = () => {
  const [apps, setApps] = React.useState([<StockPriceApp />, <WelcomeApp />])

  const switchToNextApp = () => {
    setApps([...apps.slice(1), apps[0]])
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Button onLongPress={switchToNextApp} underlayColor="white">
        LongPress to switch App
      </Button>
      {apps[0]}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
