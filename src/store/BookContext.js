// import React, { createContext, useState, useEffect } from 'react';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/firebase';

// export const BookContext = createContext();

// export const BookProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const [borrowedBooks, setBorrowedBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const booksList = [];
//       try {
//         const querySnapshot = await getDocs(collection(db, "books"));
//         querySnapshot.forEach(doc => {
//           booksList.push({ ...doc.data(), id: doc.id });
//         });
//         setBooks(booksList);
//       } catch (error) {
//         console.error("Error fetching books: ", error);
//       }
//     };
//     fetchBooks();
//   }, []);

//   const borrowBook = (book) => {
//     if (borrowedBooks.length < 3) {
//       setBorrowedBooks([...borrowedBooks, book]);
//     } else {
//       alert('You cannot borrow more than three books.');
//     }
//   };

//   const returnBook = (bookId) => {
//     setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
//   };

//   return (
//     <BookContext.Provider value={{ books, borrowedBooks, borrowBook, returnBook }}>
//       {children}
//     </BookContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach(doc => {
          booksList.push({ ...doc.data(), id: doc.id });
        });
        setBooks(booksList);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };
    fetchBooks();
  }, []);

  const borrowBook = (book) => {
    if (borrowedBooks.length < 3) {
      setBorrowedBooks([...borrowedBooks, book]);
    } else {
      alert('You cannot borrow more than three books.');
    }
  };

  const returnBook = (bookId) => {
    setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
  };

  return (
    <BookContext.Provider value={{ books, borrowedBooks, borrowBook, returnBook }}>
      {children}
    </BookContext.Provider>
  );
};
