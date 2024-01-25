import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LibraryScreen = ({ navigation, route }) => {
  const likedBooks = route.params.likedBooks || [];

  const handleBookSelect = (book) => {
    // Add logic to handle opening the book details screen
    // For example: navigation.navigate('BookDetails', { book });
  };

  const renderBookItem = ({ item, index }) => (
    <TouchableOpacity key={index} style={styles.bookItemContainer} onPress={() => handleBookSelect(item)}>
      <Image source={{ uri: `http://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` }} style={styles.bookImage} />
      <View style={styles.bookInfoContainer}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author_name}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <ImageBackground source={require('../assets/bg2.jpg')} style={styles.background}>
      <View style={styles.container}>
        {likedBooks.length > 0 ? (
          <FlatList
            data={likedBooks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderBookItem}
            contentContainerStyle={styles.bookListContainer}
            numColumns={3}
          />
        ) : (
          <Text style={styles.message}>You have not liked any books yet.</Text>
        )}
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
  },
  bookListContainer: {
    paddingHorizontal: 8,
  },
  bookItemContainer: {
    width: '30%',
    marginHorizontal: '1.5%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bookInfoContainer: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 32,
  },
});

export default LibraryScreen;