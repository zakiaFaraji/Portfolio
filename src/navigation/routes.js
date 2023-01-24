import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LogInScreen from '../screens/LogInScreen/LogInScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import MoroccoPhotoListScreen from '../screens/MoroccoPhotoListScreen/PhotoListScreen';
import MoroccoPhotoDetailScreen from '../screens/MoroccoPhotoDetail/MPhotoDetails';
import FrancePhotoListScreen from '../screens/FrancePhotoListScreen/PhotoListScreen';
import FrancePhotoDetailScreen from '../screens/FrancePhotoDetail/FPhotoDetails';
import BelgiumPhotoListScreen from '../screens/BelgiumPhotoListScreen/PhotoListScreen';
import BelgiumPhotoDetailScreen from '../screens/BelgiumPhotoDetail/BPhotoDetails';
import SwitzerlandPhotoDetailScreen from '../screens/SwitzerlandPhotoDetail/SPhotoDetails';
import SwitzerlandPhotoListScreen from '../screens/SwitzerlandPhotoListScreen/PhotoListScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Morocco"
          component={MoroccoPhotoListScreen}
          options={{title: 'Morocco'}}
        />
        <Stack.Screen
          name="France"
          component={FrancePhotoListScreen}
          options={{title: 'France'}}
        />
        <Stack.Screen
          name="Belgium"
          component={BelgiumPhotoListScreen}
          options={{title: 'Belgium'}}
        />
        <Stack.Screen
          name="Switzerland"
          component={SwitzerlandPhotoListScreen}
          options={{title: 'Switzerland'}}
        />
        <Stack.Screen
          name="MPhotoDetail"
          component={MoroccoPhotoDetailScreen}
          options={{title: 'Photo Detail'}}
        />
        <Stack.Screen
          name="FPhotoDetail"
          component={FrancePhotoDetailScreen}
          options={{title: 'Photo Detail'}}
        />
        <Stack.Screen
          name="BPhotoDetail"
          component={BelgiumPhotoDetailScreen}
          options={{title: 'Photo Detail'}}
        />
        <Stack.Screen
          name="SPhotoDetail"
          component={SwitzerlandPhotoDetailScreen}
          options={{title: 'Photo Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
