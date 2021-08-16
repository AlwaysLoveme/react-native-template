import {NavigationCommonOption, NavigationTabOption, Routes} from './interface';

const tabs: NavigationTabOption[] = [
  {
    name: Routes.Home,
    options: {
      title: '首页',
    },
    getComponent: () => require('@/pages/home/index').default,
  },
  {
    name: Routes.User,
    options: {
      title: '我的',
    },
    getComponent: () => require('@/pages/user').default,
  },
];

const navigators: NavigationCommonOption[] = [
  {
    name: Routes.Tabs,
    options: {
      headerShown: false,
    },
    getComponent: () => require('@/pages/tabs').default,
  },
  {
    name: Routes.Other,
    options: {
      title: '其他',
    },
    getComponent: () => require('@/pages/other').default,
  },
];

export {navigators, tabs};
