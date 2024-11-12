import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { BookContext } from '../store/BookContext';

const BorrowedScreen = () => {
  const { borrowedBooks, returnBook } = useContext(BookContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Borrowed Books</Text>
      {borrowedBooks.length === 0 ? (
        <Text style={styles.emptyText}>You have no borrowed books.</Text>
      ) : (
        <FlatList
          data={borrowedBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <Text style={styles.bookTitle}>{item.name}</Text>
              <Text style={styles.bookAuthor}>by {item.author}</Text>
              <TouchableOpacity 
                style={styles.returnButton} 
                onPress={() => returnBook(item.id)}
              >
                <Text style={styles.returnButtonText}>Return Book</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default BorrowedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 40,
  },
  bookCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  returnButton: {
    alignSelf: 'center',
    backgroundColor: '#ff5c5c',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
