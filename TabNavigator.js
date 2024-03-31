import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewHotScreen from './screens/NewHotScreen';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import My_NetflixScreen from './screens/My_NetflixScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './screens/SearchScreen';
import MovieInfoScreen from './screens/MovieInfoScreen';
import ListScreen from './screens/ListScreen';
import ListGameScreen from './screens/ListGameScreen';
import {View, Text, StyleSheet,Image,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NewHotStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GameStack = createStackNavigator();
const MyNetflixStack = createStackNavigator();

const NewHotStackScreen = () => (
  <NewHotStack.Navigator headerMode="none">
    <NewHotStack.Screen name="NewHot" component={NewHotScreen} />
    <NewHotStack.Screen name="Search" component={SearchScreen} />
  </NewHotStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Search" component={SearchScreen} />
    <HomeStack.Screen name="Movie" component={MovieInfoScreen} />
    <HomeStack.Screen name="List" component={ListScreen} />
    <HomeStack.Screen name="ListGame" component={ListGameScreen} />
  </HomeStack.Navigator>
);

const GameStackScreen = () => (
  <GameStack.Navigator headerMode="none">
    <GameStack.Screen name="Game" component={GameScreen} />
    <GameStack.Screen name="Search" component={SearchScreen} />
  </GameStack.Navigator>
);

const MyNetflixStackScreen = () => (
  <MyNetflixStack.Navigator headerMode="none">
    <MyNetflixStack.Screen name="MyNetflix" component={My_NetflixScreen} />
    <MyNetflixStack.Screen name="Search" component={SearchScreen} />
    <MyNetflixStack.Screen name="List" component={ListScreen} />
    <MyNetflixStack.Screen name="ListGame" component={ListGameScreen} />
  </MyNetflixStack.Navigator>
);


export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="NewHot"
      tabBarOptions={{
        tabStyle: { backgroundColor: '#262626', }, 
        activeTintColor: '#FFFFFF',
        style: { borderTopColor: 'transparent', elevation: 0 },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === 'NewHot') {
            iconComponent = focused ? (
              <Ionicons name="flame" size={size} color="#FFFFFF" />
            ) : (
              <Ionicons name="flame-outline" size={size} color={color} />
            );
          } else if (route.name === 'Home') {
            iconComponent = focused ? (
              <Ionicons name="home" size={size} color="#FFFFFF" />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            );
          } else if (route.name === 'Game') {
            iconComponent = focused ? (
              <Ionicons name="game-controller" size={size} color="#FFFFFF" />
            ) : (
              <Ionicons name="game-controller-outline" size={size} color={color} />
            );
          } else if (route.name === 'MyNetflix') {
            iconComponent = (
              <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./screens/images/girl.jpg')}
                  style={{ width: size, height: size, position: 'absolute' }}
                />
                <View
                  style={{
                    width: size,
                    height: size,
                    position: 'absolute',
                    borderWidth: 1, 
                    borderColor: focused ? '#FFFFFF' : 'transparent', 
                  
                  }}
                />
              </View>
            );
          }
          return iconComponent;
        },
      })}
    >
      <Tab.Screen name="NewHot" component={NewHotStackScreen} options={{ headerShown: false ,}}/>
      <Tab.Screen name="Home" component={HomeStackScreen}options={{ headerShown: false ,}}/>
      <Tab.Screen name="Game" component={GameStackScreen}options={{ headerShown: false ,}}/>
      <Tab.Screen name="MyNetflix" component={MyNetflixStackScreen}options={{ headerShown: false ,}}/>
    </Tab.Navigator>
  );
}
