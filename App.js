import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import {App as WelcomeApp} from './sub-apps/welcome-to-rn/App';
import {App as StockPriceApp} from './sub-apps/stock-price-app/App';

export const App = () => {
  const [apps, setApps] = React.useState([<StockPriceApp />, <WelcomeApp />]);

  const switchToNextApp = () => {
    setApps([...apps.slice(1), apps[0]]);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableHighlight onLongPress={switchToNextApp} underlayColor="white">
        <View style={styles.buttonFullWidth}>
          <Text style={styles.buttonText}>LongPress to switch App</Text>
        </View>
      </TouchableHighlight>
      {apps[0]}
    </View>
  );
};

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
});
