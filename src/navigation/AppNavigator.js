import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen 
            name="Login" 
            options={{ headerShown: false }}
          >
            {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen 
          name="MainApp" 
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
