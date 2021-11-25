import React from 'react';
import HomeScreen from './screens/Home';
import SpaceCraftScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}