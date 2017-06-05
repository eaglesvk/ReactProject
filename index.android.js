/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {
   AppRegistry,
   Component,
   StyleSheet,
   Navigator,
   Text,
   View

 } from 'react-native';
 
 import Register from './register';
 import Login from './login';
 import Root from './root';
 import Home from './home';

 class ReactProject extends Component {
   render() {
     return (
       <View style={styles.container}>
         <Root/>
         </View>
     );
   }
 }

AppRegistry.registerComponent('ReactProject', () => ReactProject);
