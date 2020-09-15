import React from 'react';
import {Button, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type ProfileNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;

interface ProfileProps {
  navigation: ProfileNavigationProp;
  route: ProfileRouteProp;
}

function Profile({navigation}: ProfileProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Profile;
