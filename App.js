import { StyleSheet, Text, View } from 'react-native';
//Navigation imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import pages
import Planets from './pages/Planets';
import Films from './pages/Films';
import Spaceships from './pages/Spaceships';
import Details from './pages/Details';





//variables
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//navigation
export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && (
        <Tab.Navigator>
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Planets" component={Planets} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
        </Tab.Navigator>
      )}

      {Platform.OS === 'android' && (
        <Drawer.Navigator>
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Planets" component={Planets} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
        </Drawer.Navigator>
      )}
      </NavigationContainer>
  )
}
//       <Stack.Navigator initialRouteName="Films">
//         <Stack.Screen name="Films" component={Films} />
//         <Stack.Screen name="Planets" component={Planets} />
//         <Stack.Screen name="Spaceships" component={Spaceships} />
//         <Stack.Screen name="Details" component={Details} />
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   ), 
// }

