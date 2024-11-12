import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { BookContext } from '../store/BookContext';

const BookListScreen = ({ navigation }) => {
  const { books } = useContext(BookContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.bookTitle}>{item.name}</Text>
            <Text style={styles.authorText}>by {item.author}</Text>

            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Book Detail', { book: item })}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,  // For Android shadow effect
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  authorText: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookListScreen;
