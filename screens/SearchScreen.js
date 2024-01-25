import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBookUrl, setSelectedBookUrl] = useState('');
  const [likedBooks, setLikedBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`);
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookSelect = (book) => {
    setSelectedBookUrl(`http://openlibrary.org/books/${book.key}`);
  };

  const handleLikeBook = (book) => {
    setLikedBooks([...likedBooks, book]);
  };

  const handleCloseWebView = () => {
    setSelectedBookUrl('');
  };

  const handleViewLikedBooks = () => {
    navigation.navigate('Library', { likedBooks });
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItemContainer} onPress={() => handleBookSelect(item)}>
      <Image source={{ uri: `http://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author_name}</Text>
      <Button title="Like" onPress={() => handleLikeBook(item)} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../assets/libbg.jpg')} style={styles.background}>

      <View style={styles.container}>
      <TouchableOpacity
              style={styles.button1}
              onPress={handleViewLikedBooks}
            >
              <Text style={styles.buttonText1}>My Books</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter keywords..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.searchInput}
        />   
          <TouchableOpacity
              style={styles.button}
              onPress={handleSearch}
            >
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        {selectedBookUrl ? (
          <>
            <WebView source={{ uri: selectedBookUrl }} style={styles.webView} />
            <Button title="Close" onPress={handleCloseWebView} />
          </>
        ) : (
          <>
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.key}
              numColumns={2}
              renderItem={renderBookItem}
              contentContainerStyle={styles.bookListContainer}
            />
          </>
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
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  searchInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  bookListContainer: {
    flexGrow: 1,
  },
  bookItemContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  bookImage: {
    width: 150,
    height: 200,
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: 'black',
  },
  button1: {
    backgroundColor: '#258ef5',
    padding: 10,
    width: '100%', 
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#258ef5',
    padding: 10,
    width: '50%', 
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 4,
  },
  buttonText1: {
    textAlign:'center',
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
  },
  buttonText: {
    textAlign:'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
  webView: {
    flex: 1,
  },
});

export default SearchScreen;