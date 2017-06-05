 import React, {
   AppRegistry,
   Component,
   StyleSheet,
   Navigator,
   Text,
   View

 } from 'react-native';

  class Root extends Component {
   render() {
     return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Friend </Text>

            <TouchableHiglight style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableHiglight>

            <TouchableHiglight style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHiglight>
        </View>
     );
   }
  }