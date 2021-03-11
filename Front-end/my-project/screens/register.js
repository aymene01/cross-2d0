import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native';
import bgImage from '../assets/images/background.jpg';
import Icon from 'react-native-vector-icons/Ionicons'
import GPicker from './genderpicker';
import Icon2 from 'react-native-vector-icons/FontAwesome';



const { width: WIDTH } = Dimensions.get('window')

export function register({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View>
        <Text style={styles.logoText}>Register</Text>
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
        <Icon name={'mail-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
        style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        placeholder={'Email adress'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
      />
      </View>

      <View style={styles.inputContainer}>
      <Icon name={'fitness-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
        style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        placeholder={'DD/MMM/YYYY'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
      />
      </View>

      <View style={styles.inputContainer}>
      <Icon2 name={'venus-mars'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
        style={styles.inputIcon} />
      <GPicker/>
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
      <View style={styles.checkboxContainer}>
      <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
      />
      <Text style={styles.label}>Do you accept our terms and conditions ?</Text>
      <TouchableOpacity>
      <Icon onPress={() => Alert.alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')} 
      name={'information-circle-outline'} style={styles.cgusize} size={28} color={'rgba(255, 255, 255, 0.7)'}>
      </Icon>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.btnLogin}>
      <Text onPress={() => navigation.navigate('todolist')} style={styles.text}  >Register</Text>
      </TouchableOpacity>
      <View style={styles.container}>
      </View>
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
    marginTop: 5,
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
  },
  clickUnderline: {
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  cgusize: {
      fontSize: 20,
      marginLeft: 3,
      paddingTop: 7,
      color: 'white',
  }
});
