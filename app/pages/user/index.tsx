import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes, RootNavigationProp} from '@/navigation/interface';

const User: React.FC = () => {
  const navigation = useNavigation<RootNavigationProp<Routes.User>>();
  const back = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Button title="User" color="red" onPress={back} />
    </View>
  );
};

export default User;
