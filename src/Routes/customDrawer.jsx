import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';




import {DrawerMainStyle} from "../styles/drawer"

export default function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;
    const height =  useWindowDimensions().width * 0.1
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={DrawerMainStyle.menuContainer}>
          <View
            style={[
              DrawerMainStyle.menuItemsCard,
              { backgroundColor: '#fff2df', width: width, height: height },
            ]}>
            <DrawerItem
              style={{
                position: 'absolute',
                left: 0,
                width: width,
                height: height,
              }}
              label="Sample"
              labelStyle={{ color: '#609806' }}
              onPress={() => {
                props.navigation.navigate('sample');
              }}
            />
          </View>
          <View
            style={[
              DrawerMainStyle.menuItemsCard,
              { backgroundColor: '#fff2df', width: width, height: height },
            ]}>
            <DrawerItem
              style={{
                position: 'absolute',
                left: 0,
                width: width,
                height: height,
              }}
              label="Home"
              labelStyle={{ color: '#609806' }}
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }

  