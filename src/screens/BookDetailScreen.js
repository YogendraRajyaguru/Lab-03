import React, { useContext } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { BookContext } from '../store/BookContext';
import Icon from 'react-native-vector-icons/FontAwesome';  // Import the FontAwesome icon set

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  const { borrowedBooks, borrowBook } = useContext(BookContext);

  const handleBorrowBook = () => {
    if (borrowedBooks.length < 3) {
      borrowBook(book);
      Alert.alert("Success", `${book.name} has been borrowed!`);
    } else {
      Alert.alert("Limit Reached", "You cannot borrow more than three books.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={book.coverImage ? { uri: book.coverImage } : require('../../assets/favicon.png')} 
        style={styles.coverImage} 
        onError={() => console.log('Failed to load image')}
      />
      <Text style={styles.bookName}>{book.name}</Text>
      <Text style={styles.authorName}>by {book.author}</Text>
      <Text style={styles.rating}>Rating: {book.rating}</Text>
      <Text style={styles.summaryTitle}>Summary</Text>
      <Text style={styles.summaryText}>{book.summary}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Borrow Book" onPress={handleBorrowBook} color="#4CAF50" />
      </View>

  
    </ScrollView>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  coverImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  bookName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorName: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginBottom: 15,
  },
  rating: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 30,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
