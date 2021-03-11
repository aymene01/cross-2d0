import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Link, Login } from 'react-native';
import bgImage from '../assets/images/background.jpg';
import logo from '../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons'


const { width: WIDTH } = Dimensions.get('window')

export function LoginDashboard({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.logoText}>AYMENE & PONCH</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
        style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
      />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'lock-closed-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
        style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
      />
      
      <TouchableOpacity style={styles.btnEye}>
        <Icon name={'ios-eye-outline'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
      <Text onPress={() => navigation.navigate('todolist')} style={styles.text}  >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('register')}
        style={styles.noAccount}>Don't have an account yet?
        <Text style={styles.clickUnderline}> Click here</Text></Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ImageBackground>
  );
  }

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,    
    backgroundColor: '#eb401a',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
  noAccount: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 20,
  },
  clickUnderline: {
    textDecorationLine: 'underline',
  },
});
