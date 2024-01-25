import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
  return (
    <ImageBackground source={require('../assets/aboubg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/developer.jpg')} style={styles.image} />
        <Text style={styles.name}>Nokukhanya Mpofu</Text>
        <Text style={styles.bio}>Nokukhanya Mpofu, a dedicated student at NUST, 
        developed a user-friendly mobile app to revolutionize library services. Her goal is to enhance accessibility and convenience by allowing users
         to access resources, search for books, manage accounts, and perform library-related tasks on their mobile devices.</Text>
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-github" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  socialIconsContainer: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginHorizontal: 8,
  },
});

export default AboutScreen;