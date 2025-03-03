import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Ekranları içe aktarıyoruz
import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{ title: 'Ana Akış' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

