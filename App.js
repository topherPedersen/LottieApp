import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LottieView from 'lottie-react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <LottieView source={require('./animations/sync.json')} autoPlay loop />
    );
  }
}

export default App;
