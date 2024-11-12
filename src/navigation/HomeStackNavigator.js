import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from '../screens/BookListScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Books List" component={BookListScreen} />
      <Stack.Screen name="Book Detail" component={BookDetailScreen} />
    </Stack.Navigator>
  );
}
