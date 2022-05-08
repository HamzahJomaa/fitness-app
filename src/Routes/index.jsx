import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from "../views/LoginScreen"
import SignupScreen from "../views/SignupScreen"
import HomeScreen from "../views/HomeScreen";
import { useSelector } from "react-redux";

import CustomDrawerContent from "./customDrawer"
import SampleScreen from '../views/SampleScreen';

const Drawer = createDrawerNavigator();


function MyDrawer({ navigation }) {
   let profile = useSelector(state => state.profile)
   return (
      <>
         <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/> }
            initialRouteName={profile.id === null ? "home" : "login"}
            screenOptions={{ headerShown: false }}>
               {profile.id === null ? 
               <> 
               <Drawer.Screen 
                  name="home" 
                  component={HomeScreen} />
               <Drawer.Screen 
                  name="sample" 
                  component={SampleScreen} />
               </>  :  <> 
               <Drawer.Screen 
                  name="login" 
                  component={LoginScreen} />
               <Drawer.Screen 
                  name="signup" 
                  component={SignupScreen} />
               </>
               }
            
         </Drawer.Navigator>
      </>
   );
}

export default function App() {
   return (
      <NavigationContainer>
         <MyDrawer />
      </NavigationContainer>
   );
}

