import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Planets from './pages/Planets';
import Films from './pages/Films';
import Spaceships from './pages/Spaceships';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {Platform.OS === 'ios' ? (
          <Tab.Navigator>
            <Tab.Screen name="Films" component={Films} />
            <Tab.Screen name="Planets" component={Planets} />
            <Tab.Screen name="Spaceships" component={Spaceships} />
          </Tab.Navigator>
        ) : (
          <Drawer.Navigator>
            <Drawer.Screen name="Films" component={Films} />
            <Drawer.Screen name="Planets" component={Planets} />
            <Drawer.Screen name="Spaceships" component={Spaceships} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
