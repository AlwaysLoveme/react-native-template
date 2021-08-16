import {ComponentType} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

// routes config option
type NavigationBaseOption = {
  name: Routes;
  component?: ComponentType<any>;
  getComponent: () => ComponentType<any>; // 懒加载页面使用此属性
  initialParams?: Record<string, unknown>; // 初始化路由参数
};
export type NavigationCommonOption = NavigationBaseOption & {
  options: NativeStackNavigationOptions;
};
export type NavigationTabOption = NavigationBaseOption & {
  options: BottomTabNavigationOptions;
};

// route list
export enum Routes {
  Home = 'Home',
  User = 'User',
  Tabs = 'Tabs',
  Other = 'Other',
}
// declare route params
export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.User]: undefined;
  [Routes.Tabs]: undefined;
  [Routes.Other]: undefined;
};
export type RootNavigationProp<RouteName extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, RouteName>;
export type RootRouteProp<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
