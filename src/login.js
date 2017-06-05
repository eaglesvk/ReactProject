import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';


export default class Login extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('ReactProject/src/img/Travel.png')} 
                    />

                    <Text style={styles.title}>Travel machine</Text>
                </View>

                <View style={styles.formContainer}>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        color: '#FFFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});