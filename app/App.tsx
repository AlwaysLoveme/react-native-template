import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';

import {Routes, RootStackParamList} from '@/navigation/interface';
import {navigators} from '@/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface HeaderStyle {
  backgroundColor: string;
}
interface HeaderTitleStyle {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
}

class App extends React.Component {
  timer!: ReturnType<typeof setTimeout>;
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  splashHide() {
    this.timer = setTimeout(() => {
      RNBootSplash.hide();
    }, 1500);
  }
  customHeader({navigation, options}: NativeStackHeaderProps) {
    const color = options.headerTintColor;
    const headerStyle = options.headerStyle as HeaderStyle;
    const headerTitleStyle = options.headerTitleStyle as HeaderTitleStyle;
    return (
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <View
            style={{
              height: 88,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: StatusBar.currentHeight || insets?.top,
              backgroundColor: headerStyle.backgroundColor,
            }}>
            <View
              style={{
                flex: 1,
                height: 40,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <FontAwesomeIcon
                name="angle-left"
                color={color}
                size={30}
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{
                  color,
                  fontSize: headerTitleStyle?.fontSize,
                }}>
                {options.title}
              </Text>
              <View>{options.headerRight}</View>
            </View>
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    );
  }
  render() {
    return (
      <>
        <NavigationContainer onReady={this.splashHide}>
          <StatusBar translucent={true} barStyle="dark-content" />
          <Stack.Navigator
            initialRouteName={Routes.Tabs}
            screenOptions={() => ({
              header: this.customHeader,
              animation: 'slide_from_right',
              headerShadowVisible: false,
              headerTintColor: '#333',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerStyle: {
                backgroundColor: '#fff',
              },
            })}>
            {navigators.map(route => {
              return (
                <Stack.Screen
                  key={route.name}
                  name={route.name}
                  options={route.options}
                  getComponent={route.getComponent}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
