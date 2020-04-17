import React, {Component } from 'react'
import {StyleSheet, Alert, Text, View, Image,TouchableWithoutFeedback, StatusBar,TextInput,SafeAreaView,Keyboard,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
export default class Login extends Component {
    
    render(){
        return(
          <View style = {styles.container}>
               <SafeAreaView>
               <KeyboardAvoidingView behavior='padding'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.logoContainer} >
                        <Image style={styles.logo} source= {require('../img/logo.png')}></Image>
                        <Text style={styles.title}>Account Infomartion</Text>
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.input}
                                placeholder="Enter username"
                                placeholderTextColor='#0088A8'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCapitalize = "none"
                                autoCorrect={false}
                                onSubmitEditing = {()=> this.refs.txtPassword.focus()}
                            />
                            <TextInput style={styles.input}
                                placeholder="Enter password"
                                placeholderTextColor='#0088A8'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                secureTextEntry= {true}
                                returnKeyType = 'go'
                                ref={"txtPassword"}
                            />
                            <TouchableOpacity style={styles.buttonContainer} onPress={this.onLogin} >
                                <Text style={styles.button}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer} onPress={this.onRegister} >
                                <Text style={styles.button}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
               </KeyboardAvoidingView>       
           </SafeAreaView>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width: 300

    },
    logo:{
        width: 100,
        height: 100,
        marginBottom: 20,
       
    },
    title: {
        color: '#0088A9',
        alignItems:'center',
        fontSize: 18,
        opacity: 0.9,
    },
    infoContainer: {
        marginTop: 50
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        // height:300,
        // backgroundColor: 'red',
        // opacity: 0.2
    },
    input: {
        height:40,
        backgroundColor: '#9AD0DA',
        opacity: 0.9,
        borderColor: "red",
        borderRadius: 20,
        marginLeft: 20,
        paddingHorizontal: 10,
        marginBottom: 10
       
    },
    button:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    
    },
    buttonContainer:{
        backgroundColor: '#0D5061',
        paddingVertical:5,
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center',
        width: 280,
        marginLeft: 20,
        marginBottom: 10

    }
    
})