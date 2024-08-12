import React from 'react';
import { Provider } from 'react-redux';
import { Listing as MovieList, Detail as MovieDetail } from './src/screens/movie/index';
import { store } from './src/state/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MovieList"
            component={MovieList}
            options={{ title: 'Movie List' }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{ title: 'Movie Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
}