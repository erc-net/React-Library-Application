import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    // TODO: Implement sign out functionality here.
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
    return (
      <ImageBackground
        source={require('../assets/hombg.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Khanya`s Library</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('search')}
          >
            <Text style={styles.buttonText}>Search Books</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignOut}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 50,
    },
    button: {
      backgroundColor: 'rgba(255, 255, 202, 0.2)',
      width: '60%',
      padding: 15,
      marginTop:10,
      marginBottom: 15,
      borderRadius: 10,
      alignItems: 'center',
      borderColor: '#258ef5', 
      borderWidth: 2,
  },
  buttonText: {
      color: 'white',
      fontWeight: '800',
      fontSize: 16,
  },
  });