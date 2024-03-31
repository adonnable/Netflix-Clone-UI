import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import IntroPage from './screens/IntroPage';
import UserOption from './screens/UserOption';
import SearchScreen from './screens/SearchScreen';
import ListScreen from './screens/ListScreen.js';
import ListGameScreen from './screens/ListGameScreen.js';
import MovieInfoScreen from './screens/MovieInfoScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" headerMode="none">
        <Stack.Screen name="Intro" component={IntroPage} />
        <Stack.Screen name="User" component={UserOption} />
        <Stack.Screen name="Main" component={TabNavigator} />
        
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ListGame" component={ListGameScreen}/>
        <Stack.Screen name="Movie" component={MovieInfoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
