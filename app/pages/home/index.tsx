import React from 'react';
import {View, Button, StatusBar, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Routes,
  RootRouteProp,
  RootNavigationProp,
} from '@/navigation/interface';

interface HomeProp {
  navigation: RootNavigationProp<Routes.Home>;
  route: RootRouteProp<Routes.Home>;
}
const Home: React.FC = () => {
  const route = useRoute<RootRouteProp<Routes.Home>>();
  const navigation = useNavigation<RootNavigationProp<Routes.Home>>();
  console.log(route);
  const push = () => {
    // navigation.navigate('User');
    navigation.navigate(Routes.Other);
  };
  return (
    <View>
      <Text>{StatusBar.currentHeight || 0}</Text>
      <Button title="Home" color="red" onPress={push} />
    </View>
  );
};

export default Home;
